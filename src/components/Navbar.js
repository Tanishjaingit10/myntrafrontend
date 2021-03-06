import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Store/Context'
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'

export const Navbar = () => {

    const {context,reducer} = useContext(appContext)
    const loggedIn = context.loggedIn
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const logout = () => {
        reducer.clear()
        setShowMediaIcons(false)
    }

    return (
        <div className="flex absolute justify-between h-20 z-10 w-full bg-gray-50 shadow-md" style={{ position: 'fixed', top: '0px' }}>
            <Link to="/" className="flex md:pl-10 lg:pl-16 items-center justify-start w-2/12 text-xl text-gray-700 font-bold no-underline text-pink-500 hover:underline hover:text-pink-500 ml-6"><div>Myntra</div></Link>
            <div className="flex ">
                {
                    loggedIn ?
                        <>
                            <Link to="/games" className="menu-link flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Games</div></Link>
                            <Link to="/profile" className="menu-link flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Profile</div></Link>
                            <Link to="/cart" className="menu-link flex relative items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500">
                                 Cart
                                 {context?.cart && context.cart.length >0 && <div className="absolute text-xs text-white font-normal h-4 text-center top-0 right-0 transform translate-x-full -translate-y-1/3 w-4 bg-red-500 rounded-full">{context.cart.length}</div>}
                             </Link>
                            <Link to="/contact" className="menu-link flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Contact</div></Link>
                            <button onClick={logout} className="menu-link flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Logout</div></button>

                            <div className="hamburger-menu">
                                <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                    <GiHamburgerMenu className="ham-icon" />
                                </button>
                            </div>
                            <>
                                <Offcanvas show={showMediaIcons} onHide={() => setShowMediaIcons(!showMediaIcons)} placement="end">
                                    <Offcanvas.Header closeButton>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Link to="/games" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}><div>Games</div></Link>
                                        <Link to="/profile" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}><div>Profile</div></Link>
                                        <Link to="/cart" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                            <div className="relative">Cart
                                            {context?.cart && context.cart.length >0 && <div className="absolute text-xs text-white font-normal h-4 text-center top-0 right-0 transform translate-x-full -translate-y-1/3 w-4 bg-red-500 rounded-full">{context.cart.length}</div>}</div>
                                        </Link>
                                        <Link to="/contact" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}><div>Contact</div></Link>
                                        <button onClick={logout} className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" ><div>Logout</div></button>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                        </>
                        :
                        <>
                            <Link to="/signin" className="menu-link1 flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Login</div></Link>
                            <Link to="/signup" className="menu-link1 flex items-center justify-center text-lg m-8 text-gray-700 font-semibold no-underline hover:text-pink-500"><div>Signup</div></Link>

                            <div className="hamburger-menu1">
                                <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                    <GiHamburgerMenu className="ham-icon" />
                                </button>
                            </div>
                            <>
                                <Offcanvas show={showMediaIcons} onHide={() => setShowMediaIcons(!showMediaIcons)} placement="end">
                                    <Offcanvas.Header closeButton>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Link to="/signin" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}><div>Login</div></Link>
                                        <Link to="/signup" className="flex items-center justify-start text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500" onClick={() => setShowMediaIcons(!showMediaIcons)}><div>Signup</div></Link>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                        </>
                }
            </div>
        </div>
    )
}
