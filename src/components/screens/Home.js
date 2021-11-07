import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BACKEND } from '../../Keys';
import { Carousel, Card, Button, Row, Col, Modal, Accordion } from "react-bootstrap";
import { FaTrophy } from 'react-icons/fa'
import Footer from "../Footer"
import Data from "./Data"
import { Link } from 'react-router-dom'
import { appContext } from '../../Store/Context';
import Imagestart from '../../img-start.png';

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
function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4 className="text-center m-8 text-gray-700 font-bold">Earn Myntra coins and get a chance to be featured on Myntra and buy products at discounted prices!!</h4>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Follow the steps given below</Accordion.Header>
                        <Accordion.Body>
                            1)	If you are a new user, click “Signup” on the top right corner of your page. Signing up for the first time will reward you <b>100 Myntra coins</b>. <br />
                            2)	As soon as you signup, you will be asked for a referral code. You can use the referral code of your friend to <b>win 100 additional Myntra coins</b> for you as well as your friend. If you don’t have one, skip to proceed. <br />
                            3)	Go to “Contact” page and submit a feedback to earn <b>10 Myntra coins</b>. <br />
                            4)	Go to “Games” page and play daily quiz to win <b>4 Myntra coins per question</b>. <br />
                            5)	To check the total number of Myntra coins earned, go to “Profile” page. Here you can also see the various ways of earning and redeeming Myntra coins. <br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can Myntra coins be redeemed ?</Accordion.Header>
                        <Accordion.Body>
                            <b>Yes</b>, if you have products added into cart and sufficient Myntra coins then they can be redeemed. <br />
                            1)	Go to “Cart” page. Here you can see your billing amount after deducting the earned Myntra coins.<br />
                            2)	Checkout and place your order. As soon as you click “Checkout”, you will also get 10% of total billing amount as Myntra coins.<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Stars of the Week ?</Accordion.Header>
                        <Accordion.Body>
                            The <b>top 3 users</b> with maximum number of Myntra coins at the end of every week will be featured on Myntra’s home page and will get <b>50 bonus Myntra coins</b>.<br /><br/>
                            <span className="text-lg font-bold text-red-500">So what are you waiting for, get started!! Good Luck</span>.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CardComponent({ item }) {
    const [modalShow, setModalShow] = useState(false);
    const { context, setContext } = useContext(appContext)
    const price = item.price;
    const text = item.text;
    const image = item.image;
    return (
        <Col>
            <Card className="shadow-xl">
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
                            setContext(prev => { return { ...prev, cart: [...prev.cart, item] } })
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
    const [mymodalShow, setMyModalShow] = useState(true);
    const [top3, setTop3] = useState([])
    useEffect(() => {
        axios.get(`${BACKEND}/stars`)
            .then(res => {
                setTop3(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <MyModal
                show={mymodalShow}
                onHide={() => setMyModalShow(false)}
            />
            <div className="md:mx-10 lg:mx-24">
                <div className="container-fluid" style={{ marginBottom: '40px' }}>
                    <Carousel style={{ marginTop: '100px' }} className="shadow-xl">
                        <Carousel.Item>
                            <Link to="/profile">
                                <img
                                    className="d-block w-100"
                                    src={Imagestart}
                                    alt="First slide"
                                    width="100%"
                                />
                            </Link>
                        </Carousel.Item>
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
                    <Row xs={2} lg={4} className="g-4">
                        {
                            Data["women-images"].map(item => <CardComponent item={item} />)
                        }
                    </Row>
                </div>
                <div style={{ marginLeft: '10px' }} className="text-3xl font-semibold">Men collection</div>
                <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                    <Row xs={2} md={4} className="g-4">
                        {
                            Data["men-images"].map(item => <CardComponent item={item} />)
                        }
                    </Row>
                </div>
                {
                    top3.length > 2 &&
                    <>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="text-3xl font-semibold">Stars of the Week</div>
                            </div>                            
                        </div>

                        <div className="container-fluid" style={{ marginTop: '10px', marginBottom: '40px' }}>
                            <Row xs={1} sm={2} md={3} className="g-4" style={{ marginTop: '20px' }}>
                                <Col style={{ margin: 'auto' }}>
                                    <Card className="shadow-md">
                                        <Card.Body className="bg-yellow-200">
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Winner</Card.Title>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <FaTrophy size="2em" color="#FFD700" />
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[0].name}<br />
                                                <span className="font-semibold">Coins: {top3[0].coins}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row xs={1} sm={2} md={3} className="g-4" style={{ marginTop: '5px' }}>
                                <Col style={{ margin: 'auto' }}>
                                    <Card className="shadow-md mt-4">
                                        <Card.Body className="bg-gray-300">
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Second</Card.Title>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <FaTrophy size="2em" color="#C0C0C0" />
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[1].name}<br />
                                                <span className="font-semibold">Coins: {top3[1].coins}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col style={{ margin: 'auto' }}>
                                    <Card className="shadow-md mt-4">
                                        <Card.Body className="bg-yellow-400">
                                            <Card.Title className="text-lg text-center m-8 text-gray-700 font-bold">Third</Card.Title>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <FaTrophy size="2em" color="#b08d57" />
                                            </div>
                                            <Card.Text className="text-lg text-center m-8 mt-0 text-gray-700 font-bold">
                                                {top3[2].name}<br />
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
            <Footer />
        </div>
    );
}

export default Home
