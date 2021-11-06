import React from 'react'
import Footer from "../Footer"
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'

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
                    Feedback submitted successfully <br />
                    <span className="text-red-500">Congrats!! You have earned 10 Myntra Coins.</span>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/profile"><Button onClick={props.onHide}>Close</Button></Link>
            </Modal.Footer>
        </Modal>
    );
}
function Contact() {
    const [modalShow, setModalShow] = React.useState(false);
    const onSubmit = (e) => {
        e.preventDefault()
        setModalShow(true);
    }
    
    return (
        <div>
            <div className="container">
                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col-12">
                        <h3 className="">Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Registered Office Address</h5>
                        <address style={{ fontSize: '100%' }}>
                            Buildings Alyssa,<br />
                            Begonia and Clover situated in Embassy Tech Village,<br />
                            Outer Ring Road,<br />
                            Devarabeesanahalli Village,<br />
                            Varthur Hobli,<br />
                            Bengaluru – 560103, India <br />
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <p>CIN: U72300KA2007PTC041799 <br />
                            <b>Telephone</b>: <a href="tel:+918061561999" className="no-underline font-bold	">+91-80-61561999</a></p>
                    </div>
                </div>
                <div className="row row-content overflow-x-hidden">
                    <div className="col-12 offset-md-1">
                        <h3>Send us your Feedback</h3>
                        <br />
                    </div>
                    <div className="col-12 col-md-9 offset-md-1">
                        <form onSubmit={onSubmit}>
                            <div className="form-group row">
                                <label for="firstname" className="col-md-2 col-form-label"><b>First Name <span className="text-red-600">*</span></b></label>
                                <div className="col-md-10">
                                    <input type="text" className="shadow-sm form-control" id="firstname" name="firstname" placeholder="First Name" required />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label for="lastname" className="col-md-2 col-form-label"><b>Last Name</b></label>
                                <div className="col-md-10">
                                    <input type="text" className="shadow-sm form-control" id="lastname" name="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label for="telnum" className="col-12 col-md-2 col-form-label"><b>Contact No.</b></label>
                                <div className="col-12 col-md-10">
                                    <input type="tel" className="shadow-sm form-control" id="telnum" name="telnum" placeholder="Tel. Number" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label for="emailid" className="col-md-2 col-form-label"><b>Email <span className="text-red-600">*</span></b></label>
                                <div className="col-md-10">
                                    <input type="email" className="shadow-sm form-control" id="emailid" name="emailid" placeholder="Email" required />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label for="feedback" className="col-md-2 col-form-label"><b>Feedback <span className="text-red-600">*</span></b></label>
                                <div className="col-md-10">
                                    <textarea className="shadow-md form-control" id="feedback" name="feedback" rows="9" required></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <button type="submit" className="shadow-md btn btn-primary"><b>Send Feedback</b></button>
                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
