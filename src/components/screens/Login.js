/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { BACKEND } from '../../Keys'
import axios from 'axios'
import { appContext } from '../../context/Context'

function Login() {
    const [context,setContext] = useContext(appContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = (event)=>{
        event.preventDefault()
        axios.post(`${BACKEND}/signin`,{email,password})
        .then(res=>{
            const data = res.data
            setContext(prev=>{return {...prev,token:data?.token,user:data?.user,loggedIn:true}})
        })
        .catch(err=>console.log(err.response.data))
    }
    const handleGlogin = (response)=>{
        axios.post(`${BACKEND}/googlelogin`,{"token":response.tokenId})
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
                <h1 className="mb-2 text-3xl p-3"> Signin </h1>
                <form className="w-1/2 flex flex-col " onSubmit={(e)=>loginHandler(e)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e=>setEmail(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2" required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e=>setPassword(e.target.value)} className="mb-4 p-1 w-full rounded text-black px-2" required/>
                    <button type="submit" className="w-full shadow rounded my-3 p-2 bg-blue-800 font-bold">Login</button>
                </form>
                <GoogleLogin
                clientId="920754705442-j7429tvbnqpmbtehalk80rkhlgt2975r.apps.googleusercontent.com"
                render={e => (
                    <button onClick={e.onClick} disabled={e.disabled} className="w-1/2 shadow rounded my-5 p-2 bg-red-800 font-bold">
                        G
                    </button>
                  )}
                buttonText="Login"
                onSuccess={handleGlogin}
                onFailure={handleGfailure}
                cookiePolicy={'single_host_origin'}
                />
                <p>Don't have an account? <Link to="/signup" className="text-blue-400">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login
