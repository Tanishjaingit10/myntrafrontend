import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Store/Context'

export const Navbar = () => {

    const [context,setContext] = useContext(appContext)
    const loggedIn = context.loggedIn

    const logout = () => {
        setContext(prev=>{return{...prev,loggedIn:false,token:""}})
    }
    
    return (
        <div className="flex absolute justify-between h-20 z-10 w-full bg-gray-50 shadow-lg" style ={{position:'fixed', top:'0px'}}>
            <Link to="/" className="flex items-center justify-center w-2/12 text-xl text-gray-700 font-bold no-underline"><div>Myntra</div></Link>
            <div className="flex ">
                {
                    loggedIn ?
                    <>
                        <Link to="/games" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Games</div></Link>
                        <Link to="/profile" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Profile</div></Link>
                        <Link to="/cart" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Cart</div></Link>
                        <Link to="/contact" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Contact</div></Link>
                        {/* <button onClick={logout} className="flex items-center justify-center text-lg m-8 text-gray-700"><div>Logout</div></button> */}
                    </>
                    :
                    <>
                        <Link to="/signin" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Login</div></Link>
                        <Link to="/signup" className="flex items-center justify-center text-lg m-8 text-gray-700 font-bold no-underline"><div>Signup</div></Link>
                    </>
                }
            </div>
        </div>
    )
}
