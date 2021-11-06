import React from 'react'
import Footer from "../Footer"
import { Button, Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <div className="container-fluid" style={{ marginTop: '120px' }}>
                <div className="card mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" className="img-fluid rounded" alt="Profile pic" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center">Name </h5>
                                <br />
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-5" style={{ maxWidth: '500px', margin: 'auto' }}>
                    <h5 className="card-header text-center"><span className="text-xl font-bold text-pink-500">Myntra Coins</span></h5>
                    <div className="card-body">
                        <h5 className="card-title mb-4 text-center">Total number of myntra coins earned - <span className="text-pink-500">100</span></h5>

                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Learn how to redeem your myntra coins</Accordion.Header>
                                <Accordion.Body>
                                    1) Add products to cart. <br />
                                    2) Proceed to cart, here you will see the payment details. <br />
                                    3) You can use the available coins to reduce the payment price. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Learn how to earn Myntra coins</Accordion.Header>
                                <Accordion.Body>
                                    1)  <br />
                                    2)  <br />
                                    3)  <br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br/>
                        <Link to="/cart"><Button variant="primary">Redeem Now </Button></Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Profile

