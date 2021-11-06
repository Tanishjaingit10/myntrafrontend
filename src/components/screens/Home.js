import axios from 'axios'
import React from 'react'
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
    axios.get(`${BACKEND}`)

    const [modalShow, setModalShow] = React.useState(false);
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
                <h2 style={{ marginLeft: '10px' }}>Stars of the Week</h2>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={1} md={2} className="g-4" style={{ marginTop: '20px' }}>
                        <Col style={{ margin: 'auto' }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Winner</Card.Title>
                                    <Card.Text className="text-lg text-center m-8 text-gray-700 font-bold">
                                        Name & Coins
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
                                        Name & Coins
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Third</Card.Title>
                                    <Card.Text className="text-lg text-center m-8 text-gray-700 font-bold">
                                        Name & Coins
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
