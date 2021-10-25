import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="flex absolute justify-between h-20 w-full bg-black shadow-lg">
            <Link to="/" className="flex items-center justify-center w-2/12 text-xl text-white"><div>Myntra Dark</div></Link>
            <div className="flex">
                <Link to="/signin" className="flex items-center justify-center text-lg m-8 text-white"><div>Login</div></Link>
                <Link to="/signup" className="flex items-center justify-center text-lg m-8 text-white"><div>Signup</div></Link>
            </div>
        </div>
    )
}
