import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaUser, FaShoppingCart, FaPhone, FaGamepad} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 mb-4 sm:mb-0 links">
                        <h5>Useful Links</h5>
                        <br/>
                        <ul className="flex justify-content-center">
                            <li><Link to="/games" className="btn btn-lg"><FaGamepad/></Link></li>
                            <li><Link to="/profile" className="btn btn-lg"><FaUser /></Link></li>
                            <li><Link to="/cart" className="btn btn-lg"><FaShoppingCart /></Link></li>
                            <li><Link to="/contact" className="btn btn-lg"><FaPhone /></Link></li>                        
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 social">
                        <h5>Keep In Touch</h5>
                        <br/>
                        <ul className="flex justify-content-center">
                            <li><a className="btn btn-facebook btn-lg" rel="noreferrer" href="https://www.facebook.com/myntra" target="_blank"><FaFacebook /></a></li>
                            <li><a className="btn btn-twitter btn-lg" rel="noreferrer" href="https://twitter.com/myntra" target="_blank"><FaTwitter /></a></li>
                            <li><a className="btn btn-google btn-lg" rel="noreferrer" href="https://www.youtube.com/c/myntra" target="_blank"><FaYoutube /></a></li>
                            <li><a className="btn btn-instagram btn-lg" rel="noreferrer" href="https://www.instagram.com/myntra/"  target="_blank"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© 2021 www.myntra.com. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
