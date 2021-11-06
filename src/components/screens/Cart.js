import React, { useContext } from 'react'
import { appContext } from '../../Store/Context'
import Footer from "../Footer"
import { Row, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Cart() {

    const [context,setContext] = useContext(appContext)
    
    return (
        <>
            <div className="flex items-center justify-center">
            {
                context.cart.length > 0?
                <div className="flex mt-24 w-5/6 justify-between">
                    <div className="w-2/3">
                        {
                            <Row xs={2} md={3} className="g-4">
                                {
                                    context.cart.map(item => {
                                        const price=item.price;
                                        const text=item.text;
                                        const image=item.image;
                                        return (
                                            <Col>
                                                <Card>
                                                    <Card.Img variant="top" src={image} />
                                                    <Card.Body>
                                                        <Card.Title>Rs. {price}</Card.Title>
                                                        <Card.Text>
                                                            {text}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        }
                    </div>
                    <div className="flex-1 flex flex-col items-center mx-10">
                        <div className="flex flex-col justify-center rounded-xl shadow-sm px-8 border rounded-xl w-full items-center">
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
                            <button className="mb-8 mt-3 font-semibold shadow-sm p-2 border w-full rounded-md bg-yellow-500 text-white">Checkout</button>
                        </div>
                    </div>
                </div>
                :
                <div className="h-screen flex flex-col justify-center items-center">
                    <h2>You cart is empty!</h2>
                    <Link to="/" className="text-center no-underline hover:bg-pink-400 my-4 border rounded-lg text-xl text-white bg-pink-500 p-2">Shop Items</Link>
                </div>
            }
            </div>
            <Footer />
        </>
    )
}

export default Cart