import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../context/Context'

export const Navbar = () => {

    const [context,setContext] = useContext(appContext)
    const loggedIn = context.loggedIn

    const logout = () => {
        setContext(prev=>{return{...prev,loggedIn:false,token:""}})
    }
    
    return (
        <div className="flex absolute justify-between h-20 w-full bg-black shadow-lg">
            <Link to="/" className="flex items-center justify-center w-2/12 text-xl text-white"><div>Myntra Dark</div></Link>
            <div className="flex">
                {
                    loggedIn ?
                    <>
                        <Link to="/profile" className="flex items-center justify-center text-lg m-8 text-white"><div>Profile</div></Link>
                        <button onClick={logout} className="flex items-center justify-center text-lg m-8 text-white"><div>Logout</div></button>
                    </>
                    :
                    <>
                        <Link to="/signin" className="flex items-center justify-center text-lg m-8 text-white"><div>Login</div></Link>
                        <Link to="/signup" className="flex items-center justify-center text-lg m-8 text-white"><div>Signup</div></Link>
                    </>
                }
            </div>
        </div>
    )
}
