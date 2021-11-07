import React, { useContext, useState } from 'react'
import { appContext } from '../../Store/Context'
import Footer from "../Footer"
import { Card, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4 className="text-center m-8 text-gray-700 font-bold">Order Recieved!!</h4>
                <p className="text-lg text-center m-8 text-gray-700 font-bold">
                    Your order is out for delivery
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Cart() {
    
    const {context,setContext} = useContext(appContext)
    const [modalShow, setModalShow] = useState(false);

    function Checkout(){
        setModalShow(true)
        setContext(prev => {return{...prev, cart:[]}})
    }
    
    const deleteItem = (index) => {
        setContext(prev=>{return {...prev,cart:prev.cart.filter((item,idx)=>idx!==index)}})
    }
    
    return (
        <>
            <div className="flex items-center justify-center">
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {
                context.cart.length > 0?
                <div className="flex mt-24 mb-20 flex-col lg:flex-row w-5/6 justify-between">
                    <div className="lg:w-2/3 mb-20 flex flex-row">
                        {
                            <div className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 grid gap-4">
                                {
                                    context.cart.map((item,index) => {
                                        const price=item.price;
                                        const text=item.text;
                                        const image=item.image;
                                        return (
                                            <Card className="shadow-md">
                                                <Card.Img variant="top" src={image} />
                                                <Card.Body>
                                                    <Card.Title>Rs. {price}</Card.Title>
                                                    <Card.Text>
                                                        {text}
                                                    </Card.Text>
                                                    <Button variant="danger" onClick={(e) => deleteItem(index)}>Delete Item</Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className="flex-1 flex flex-col items-center sm:mx-10">
                        <div className="flex flex-col justify-center rounded-xl lg:mb-32 shadow-sm px-8 border rounded-xl w-full items-center">
                            <h3 className="m-4">Items</h3>
                            <div className="flex justify-between text-lg font-medium w-full mb-4">
                                <div className="w-56">Cart Items</div>
                                <div className="flex-1 flex justify-center">Price</div>
                            </div>
                            <div className="font-semibold w-full">
                                {
                                    context.cart.map((item,i)=>{
                                        return <div className={`flex justify-between w-full ${!i&&"border-t"} border-b p-2`}>
                                            <div className="w-56">{item?.text}</div>
                                            <div className="flex-1 flex justify-center">{item.price}</div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="flex justify-between text-opacity-50 text-black font-medium w-full mt-4 mb-2">
                                <div className="w-56">Total</div>
                                <div className="flex-1 flex justify-center">{context.cart.reduce((p,i)=>{
                                    return p + i.price
                                },0)}</div>
                            </div>
                            <div className="flex justify-between text-opacity-50 text-black font-medium w-full">
                                <div className="w-56">Coins discount</div>
                                <div className="flex-1 flex justify-center">{-Math.min(context.user.coins,context.cart.reduce((p,i)=>{
                                    return p + i.price
                                },0))}</div>
                            </div>
                            <div className="flex justify-between text-black font-medium w-full m-2">
                                <div className="w-56">Reduced Price</div>
                                <div className="flex-1 flex justify-center">{context.cart.reduce((p,i)=>{
                                    return p + i.price
                                },0)-Math.min(context.user.coins,context.cart.reduce((p,i)=>{
                                    return p + i.price
                                },0))}</div>
                            </div>
                            <button onClick={()=>Checkout()} className="mb-8 mt-3 font-semibold shadow-sm p-2 border w-full rounded-md bg-yellow-500 text-white">Checkout</button>
                        </div>
                    </div>
                </div>
                :
                <div className="h-screen flex flex-col justify-center items-center">
                    <div className="text-3xl font-semibold">You cart is empty!</div>
                    <Link to="/" className="text-center no-underline hover:bg-pink-400 my-4 border rounded-lg text-xl text-white bg-pink-500 p-2">Shop Items</Link>
                </div>
            }
            </div>
            <Footer />
        </>
    )
}

export default Cart