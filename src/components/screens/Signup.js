/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { BACKEND } from '../../Keys'
import { appContext } from '../../context/Context'

function Signup() {
    const [context,setContext] = useContext(appContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signupHandler = (event)=>{
        event.preventDefault()
        axios.post(`${BACKEND}/signup`,{name,email,password})
        .then(res=>{
            const data = res.data
            setContext(prev=>{return {...prev,token:data?.token,user:data?.user,loggedIn:true}})
        })
        .catch(err=>console.log(err.response.data))
    }
    const handleGsignup = (response)=>{
        axios.post(`${BACKEND}/googlesignup`,{"token":response.tokenId})
        .then(res=>{
            const data = res.data
            setContext(prev=>{return {...prev,token:data?.token,user:data?.user,loggedIn:true}})
        })
        .catch(err=>console.log(err.response.data))
    }
    const handleGfailure = (error)=>{
        console.log(error)
    }
    return (
        <div className="h-screen pt-20 flex items-center justify-center w-full">
            <div className="p-10 pt-8 w-1/2 rounded-2xl bg-gray-900 shadow-2xl flex items-center flex-col">
                <h1 className="mb-2 text-3xl p-3"> Signup </h1>
                <form className="w-1/2 flex flex-col " onSubmit={(e)=>signupHandler(e)}>
                    <label htmlFor="name">Name</label>
                    <input id="name" onChange={e=>setName(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e=>setEmail(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2" required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e=>setPassword(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2" required/>
                    <button type="submit" className="w-full shadow rounded my-3 p-2 bg-blue-800 font-bold">Signup</button>
                </form>
                <GoogleLogin
                clientId="920754705442-j7429tvbnqpmbtehalk80rkhlgt2975r.apps.googleusercontent.com"
                render={e => (
                    <button onClick={e.onClick} disabled={e.disabled} className="w-1/2 shadow rounded my-5 p-2 bg-red-800 font-bold">
                        G
                    </button>
                  )}
                buttonText="Login"
                onSuccess={handleGsignup}
                onFailure={handleGfailure}
                cookiePolicy={'single_host_origin'}
                />
                <p>Already have an account? <Link to="/signin" className="text-blue-400">Signin</Link></p>
            </div>
        </div>
    )
}

export default Signup
