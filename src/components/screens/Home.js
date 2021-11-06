import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BACKEND } from '../../Keys';
import { Carousel, Card, Button, Row, Col, Modal } from "react-bootstrap";
import Footer from "../Footer"
import Data from "./Data"

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

function Home() {
    // wake call to backend
    const [top3, setTop3] = useState([])
    useEffect(() => {
        axios.get(`${BACKEND}`)
        console.log(`${BACKEND}/stars`)
        axios.get(`${BACKEND}/stars`)
        .then(res => {
            setTop3(res.data)
        })
        .catch(err=>console.log(err))
    }, [])
    
    const img1 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/e27302d6-a2c4-4fd3-a2b1-c3bd92a8b2401554050196883-ESPRIT_Desktop_Banner.jpg";
    const img2 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/e5a955ac-e224-4b83-aaac-e86674ddb7471553959219090-Zaveri_Desktop_Banner.jpg";
    const img3 = "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const [modalShow, setModalShow] = React.useState(false);

    // const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="container-fluid">
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
                    <Row xs={2} md={4} className="g-4">
                        {
                            Data["women-images"].map(item => {
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
                                                <Button variant="primary" onClick={() => {
                                                    setModalShow(true);

                                                }}>Add to Cart</Button>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <h2 style={{ marginLeft: '10px' }}>Men collection</h2>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={2} md={4} className="g-4">
                        {
                            Data["men-images"].map(item => {
                                return (
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>Rs. {item.price}</Card.Title>
                                                <Card.Text>
                                                    {item.text}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => {
                                                    setModalShow(true);

                                                }}>Add to Cart</Button>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                {
                    top3.length>2 &&
                    <>
                        <h2 style={{ marginLeft: '10px' }}>Star of the Week</h2>
                        <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                            <Row xs={1} md={2} className="g-4" style={{ marginTop: '20px' }}>
                                <Col style={{ margin: 'auto' }}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Winner</Card.Title>
                                            <Card.Text className="text-lg text-center m-8 text-gray-700 font-bold">
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
                                            <Card.Text className="text-lg text-center m-8 text-gray-700 font-bold">
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
                                            <Card.Text className="text-lg text-center m-8 text-gray-700 font-bold">
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
        </div>
    );
}

export default Home
