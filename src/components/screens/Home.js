import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BACKEND } from '../../Keys';
import { Carousel, Card, Button, Row, Col, Modal } from "react-bootstrap";
import { FaTrophy } from 'react-icons/fa'
import Footer from "../Footer"
import Data from "./Data"
import { appContext } from '../../Store/Context';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4 className="text-center m-8 text-gray-700 font-bold">Woohoo!!</h4>
                <p className="text-lg text-center m-8 text-gray-700 font-bold">
                    Product added to Cart.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CardComponent({item}){
    const [modalShow, setModalShow] = useState(false);
    const {context,setContext} = useContext(appContext)
    const price=item.price;
    const text=item.text;
    const image=item.image;
    return (
        <Col>
            <Card className="shadow-md">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Rs. {price}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {
                        context.loggedIn &&
                        <Button variant="primary" onClick={() => {
                            setModalShow(true);
                            setContext(prev=>{return{...prev,cart:[...prev.cart,item]}})
                        }}>Add to Cart</Button>
                    }
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Card.Body>
            </Card>
        </Col>
    )
}

function Home() {
    const [top3, setTop3] = useState([])
    useEffect(() => {
        axios.get(`${BACKEND}/stars`)
        .then(res => {
            setTop3(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <div className="md:mx-10 lg:mx-24">
                <div className="container-fluid" style={{ marginBottom: '40px' }}>
                    <Carousel style={{ marginTop: '100px' }}>
                        {
                            Data["carousel-images"].map(item => {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={item}
                                            alt="First slide"
                                            width="100%"
                                        />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div style={{ marginLeft: '10px' }} className="text-3xl font-semibold">Women collection</div>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={2} sm={3} lg={4} className="g-4">
                        {
                            Data["women-images"].map(item =><CardComponent item={item}/>)
                        }
                    </Row>
                </div>
                <div style={{ marginLeft: '10px' }} className="text-3xl font-semibold">Men collection</div>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={2} md={4} className="g-4">
                        {
                            Data["men-images"].map(item => <CardComponent item={item}/>)
                        }
                    </Row>
                </div>
                {
                    top3.length>2 &&
                    <>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="text-3xl font-semibold">Stars of the Week</div>
                            </div>                            
                        </div>
                        
                        <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                            <Row xs={1} md={2} className="g-4" style={{ marginTop: '20px' }}>
                                <Col style={{ margin: 'auto' }}>
                                    <Card className="shadow-md">
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Winner</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#FFD700"/>
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[0].name}<br/>
                                                <span className="font-semibold">Coins: {top3[0].coins}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row xs={1} md={2} className="g-4" style={{ marginTop: '5px' }}>
                                <Col>
                                    <Card className="shadow-md">
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Second</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#C0C0C0"/>
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[1].name}<br/>
                                                <span className="font-semibold">Coins: {top3[1].coins}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="shadow-md">
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Third</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#b08d57" />
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[2].name}<br/>
                                                <span className="font-semibold">Coins: {top3[2].coins}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </>
                }
            </div>
            <Footer/>
        </div>
    );
}

export default Home
