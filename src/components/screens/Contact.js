import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="col-12">
                <h3>Contact Us</h3>
                <hr/>
                    <div className="row row-content align-items-center">
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Registered Office Address</h5>
                            <address style={{fontSize:'100%'}}>
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
                            <p>Telephone: +91-80-61561999</p>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <form>
                                <div className="form-group row">
                                    <label for="firstname" className="col-md-2 col-form-label"><b>First Name</b></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                                        </div>
                                </div>
                                <div className="form-group row">
                                    <label for="lastname" className="col-md-2 col-form-label"><b>Last Name</b></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="telnum" className="col-12 col-md-2 col-form-label"><b>Contact No.</b></label>
                                    <div className="col-12 col-md-10">
                                        <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. Number"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="emailid" className="col-md-2 col-form-label"><b>Email</b></label>
                                    <div className="col-md-10">
                                        <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="feedback" className="col-md-2 col-form-label"><b>Your Feedback</b></label>
                                    <div className="col-md-10">
                                        <textarea className="form-control" id="feedback" name="feedback" rows="12"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-md-2 col-md-10">
                                        <button type="submit" className="btn btn-primary"><b>Send Feedback</b></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
        )
}

                                        export default Contact
