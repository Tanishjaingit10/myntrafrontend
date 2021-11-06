/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { BACKEND } from '../../Keys'
import { appContext } from '../../Store/Context'

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
        .catch(err=>alert(err.response.data.error + ". Please login"))
    }
    const handleGsignup = (response)=>{
        axios.post(`${BACKEND}/googlesignup`,{"token":response.tokenId})
        .then(res=>{
            const data = res.data
            setContext(prev=>{return {...prev,token:data?.token,user:data?.user,loggedIn:true}})
        })
        .catch(err=>alert(err.response.data.error))
    }
    const handleGfailure = (error)=>{
        console.log(error)
    }
    return (
        <div className="h-screen pt-20 flex items-center bg-gray-100 justify-center w-full">
            <div className="p-10 pt-8 w-11/12 md:w-3/5 sm:w-5/6 lg:w-1/2 rounded-2xl bg-white shadow-md flex items-center flex-col">
                <h1 className="mb-2 text-3xl p-3 text-pink-500"> Sign up </h1>
                <div className="w-11/12 sm:w-5/6 md:3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
                    <form className="w-full flex flex-col " onSubmit={(e)=>signupHandler(e)}>
                        <label htmlFor="name">Name</label>
                        <input id="name" onChange={e=>setName(e.target.value)} className="border shadow-sm mb-4 p-1 w-full rounded text-black px-2" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={e=>setEmail(e.target.value)} className="border shadow-sm mb-4 p-1 w-full rounded text-black px-2" required/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e=>setPassword(e.target.value)} className="border shadow-sm mb-4 p-1 w-full rounded text-black px-2" required/>
                        <button type="submit" className="w-full shadow-sm rounded my-3 p-2 font-bold bg-blue-500 text-white">Signup</button>
                    </form>
                    <GoogleLogin
                    clientId="920754705442-j7429tvbnqpmbtehalk80rkhlgt2975r.apps.googleusercontent.com"
                    render={e => (
                        <button onClick={e.onClick} disabled={e.disabled} className="w-full shadow-sm rounded my-4 p-2 bg-red-500 text-white font-bold">
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
        </div>
    )
}

export default Signup
