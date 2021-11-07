import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Store/Context'

export const Navbar = () => {

    const {context,reducer} = useContext(appContext)
    const loggedIn = context.loggedIn

    const logout = () => {
        reducer.clear()
    }
    
    return (
        <div className="flex absolute justify-between h-20 z-10 w-full bg-gray-50 shadow-md" style ={{position:'fixed', top:'0px'}}>
            <Link to="/" className="flex items-center justify-center w-2/12 text-xl text-gray-700 font-bold no-underline text-pink-500 hover:underline hover:text-pink-500"><div>Myntra</div></Link>
            <div className="flex ">
                {
                    loggedIn ?
                    <>
                        <Link to="/games" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Games</div></Link>
                        <Link to="/profile" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Profile</div></Link>
                        <Link to="/cart" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500">
                            <div className="relative">
                                Cart
                                {context?.cart && context.cart.length >0 && <div className="absolute text-xs text-white font-normal h-4 text-center top-0 right-0 transform translate-x-full w-4 bg-red-500 rounded-full">{context.cart.length}</div>}
                            </div></Link>
                        <Link to="/contact" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Contact</div></Link>
                        <button onClick={logout} className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Logout</div></button>
                    </>
                    :
                    <>
                        <Link to="/signin" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Login</div></Link>
                        <Link to="/signup" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline hover:text-pink-500"><div>Signup</div></Link>
                    </>
                }
            </div>
        </div>
    )
}
