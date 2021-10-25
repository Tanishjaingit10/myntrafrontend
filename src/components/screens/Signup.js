import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = (event)=>{
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }
    return (
        <div className="h-screen pt-20 flex items-center justify-center w-full">
            <div className="p-10 pt-8 w-1/2 rounded-2xl bg-gray-900 shadow-2xl flex items-center flex-col">
                <h1 className="mb-2 text-3xl p-3"> Signup </h1>
                <form className="w-1/2 flex flex-col " onSubmit={(e)=>loginHandler(e)}>
                    <label for="name">Name</label>
                    <input id="name" onChange={e=>setName(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2"/>
                    <label for="email">Email</label>
                    <input type="email" id="email" onChange={e=>setEmail(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2"/>
                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={e=>setPassword(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2"/>
                    <button type="submit" className="w-full shadow rounded my-3 p-2 bg-blue-800 font-bold">Signup</button>
                </form>
                <button className="w-1/2 shadow rounded my-5 p-2 bg-red-800 font-bold">G</button>
                <p>Already have an account? <Link to="/signin" className="text-blue-400">Signin</Link></p>
            </div>
        </div>
    )
}

export default Signup
