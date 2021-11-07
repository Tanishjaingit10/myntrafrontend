import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND } from '../../Keys'
import { appContext } from '../../Store/Context'
import { Redirect } from 'react-router-dom'

function Referral() {

    const [context] = useContext(appContext)
    const [reff,setReff] = useState(false)
    const [referral, setReferral] = React.useState("")
    
    let config = {
        headers: {
            'Authorization': `Bearer ${context?.token}`
        }
    }
    const formHandler = (e) => {
        e.preventDefault()
        axios.post(`${BACKEND}/referral`,{referral},config)
        .then(res=>{setReff(true);console.log(res.data)})
        .catch(err=>console.log(err))
    }
    if(reff)return <Redirect to = '/profile'/>
    else 
    return (
            <div className="h-screen pt-20 flex items-center bg-gray-100 justify-center w-full">
                <div className="p-10 pt-8 w-11/12 md:w-3/5 sm:w-5/6 lg:w-1/2 rounded-2xl bg-white shadow-md flex items-center flex-col">
                    <h1 className="mb-2 text-3xl p-3 text-pink-500">You got 100 coins joining bonus!</h1>
                    <h1 className="mb-2 text-xl p-3 text-center w-96"> Enter your friend's Referral Code
                        you and your friend will recieve 100 coins each</h1>
                    <div className="w-11/12 sm:w-5/6 md:3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
                        <form className="w-full flex flex-col text-gray-700" onSubmit={(e)=>formHandler(e)}>
                            <input type="text" id="referral" value = {referral} onChange={e => setReferral(e.target.value)} className="shadow-sm mb-4 p-1 w-full rounded px-2 border" />
                            <button type="submit" className="w-full shadow-md rounded my-2 p-2 bg-blue-500 font-bold text-white">Proceed</button>
                        </form>
                        <p>Don't have a referral code? <Link to="/profile" className="text-blue-400 no-underline">Skip</Link></p>
                    </div>
                </div>
            </div>
    )
}

export default Referral
