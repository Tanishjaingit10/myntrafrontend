import axios from 'axios'
import React from 'react'
import { Carousel, Card, Button, Row, Col, Modal } from "react-bootstrap";

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
    
    const img1 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/e27302d6-a2c4-4fd3-a2b1-c3bd92a8b2401554050196883-ESPRIT_Desktop_Banner.jpg";
    const img2 = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/e5a955ac-e224-4b83-aaac-e86674ddb7471553959219090-Zaveri_Desktop_Banner.jpg";
    const img3 = "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <Carousel style={{ marginTop: '100px' }}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="First slide" width="100%" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container-fluid" style={{ marginTop: '50px', marginBottom: '40px' }}>
                <Row xs={2} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content.
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
                    ))}
                </Row>
            </div>
            <h2 style={{ marginLeft: '10px' }}>Star of the Week</h2>
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
    )
}

export default Home
