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
            <Card>
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
                <h2 style={{ marginLeft: '10px' }}>Women collection</h2>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={2} sm={3} lg={4} className="g-4">
                        {
                            Data["women-images"].map(item =><CardComponent item={item}/>)
                        }
                    </Row>
                </div>
                <h2 style={{ marginLeft: '10px' }}>Men collection</h2>
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
                                <h2><b>Stars of the Week</b></h2>
                            </div>                            
                        </div>
                        
                        <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                            <Row xs={1} md={2} className="g-4" style={{ marginTop: '20px' }}>
                                <Col style={{ margin: 'auto' }}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Winner</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#FFD700"/>
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[0].name}<br/>
                                                {top3[0].coins}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row xs={1} md={2} className="g-4" style={{ marginTop: '5px' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Second</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#C0C0C0"/>
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[1].name}<br/>
                                                {top3[1].coins}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Third</Card.Title>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <FaTrophy size="2em" color="#b08d57" />
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[2].name}<br/>
                                                {top3[2].coins}
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
