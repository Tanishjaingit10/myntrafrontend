import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaUser, FaShoppingCart, FaPhone, FaGamepad} from 'react-icons/fa'

function Contact() {
    return (
    <div>
        <div className="container">
            <div className="row" style={{ marginTop:'100px'}}>
                <div className="col-12">
                    <h3 className="">Contact Us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Registered Office Address</h5>
                    <address style={{ fontSize: '100%' }}>
                        Buildings Alyssa,<br/>
                        Begonia and Clover situated in Embassy Tech Village,<br/>
                        Outer Ring Road,<br/>
                        Devarabeesanahalli Village,<br/>
                        Varthur Hobli,<br/>
                        Bengaluru – 560103, India <br/>
                    </address>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <p>CIN: U72300KA2007PTC041799</p>
                    <p><b>Telephone</b>: +91-80-61561999</p>
                </div>
            </div>
            <div className="row row-content overflow-x-hidden">
                <div className="col-12 offset-md-1">
                    <h3>Send us your Feedback</h3>
                    <br/>
                </div>
                <div className="col-12 col-md-9 offset-md-1">
                    <form>
                        <div className="form-group row">
                            <label for="firstname" className="col-md-2 col-form-label"><b>First Name:</b></label>
                            <div className="col-md-10">
                                <input type="text" className="shadow-sm form-control" id="firstname" name="firstname" placeholder="First Name" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label for="lastname" className="col-md-2 col-form-label"><b>Last Name:</b></label>
                            <div className="col-md-10">
                                <input type="text" className="shadow-sm form-control" id="lastname" name="lastname" placeholder="Last Name" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label for="telnum" className="col-12 col-md-2 col-form-label"><b>Contact No.:</b></label>
                            <div className="col-12 col-md-10">
                                <input type="tel" className="shadow-sm form-control" id="telnum" name="telnum" placeholder="Tel. Number" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label for="emailid" className="col-md-2 col-form-label"><b>Email:</b></label>
                            <div className="col-md-10">
                                <input type="email" className="shadow-sm form-control" id="emailid" name="emailid" placeholder="Email" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label for="feedback" className="col-md-2 col-form-label"><b>Your Feedback:</b></label>
                            <div className="col-md-10">
                                <textarea className="shadow-md form-control" id="feedback" name="feedback" rows="9"></textarea>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <div className="offset-md-2 col-md-10">
                                <button type="submit" className="shadow-md btn btn-primary"><b>Send Feedback</b></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6  links">
                        <h5>Useful Links</h5>
                        <br/>
                        <ul class="list-unstyled d-sm-flex justify-content-center">
                            <li><a class="btn btn-lg" href=""><FaGamepad/></a></li>
                            <li><a class="btn btn-lg" href=""><FaUser /></a></li>
                            <li><a class="btn btn-lg" href=""><FaShoppingCart /></a></li>
                            <li><a class="btn btn-lg" href=""><FaPhone /></a></li>                        
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 social">
                        <h5>Keep In Touch</h5>
                        <br/>
                        <ul class="list-unstyled d-sm-flex justify-content-center">
                            <li><a class="btn btn-facebook btn-lg" href="https://www.facebook.com/myntra"><FaFacebook /></a></li>
                            <li><a class="btn btn-twitter btn-lg" href="https://twitter.com/myntra"><FaTwitter /></a></li>
                            <li><a class="btn btn-google btn-lg" href="https://www.youtube.com/c/myntra"><FaYoutube /></a></li>
                            <li><a class="btn btn-instagram btn-lg" href="https://www.instagram.com/myntra/"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <p>© 2021 www.myntra.com. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Contact
