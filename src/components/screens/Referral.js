import React from 'react'
import { Link } from 'react-router-dom'

function Referral() {
    const [referral, setReferral] = React.useState("")

    return (
        <div className="h-screen pt-20 flex items-center bg-gray-100 justify-center w-full">
            <div className="p-10 pt-8 w-11/12 md:w-3/5 sm:w-5/6 lg:w-1/2 rounded-2xl bg-white shadow-md flex items-center flex-col">
                <h1 className="mb-2 text-3xl p-3 text-pink-500"> Enter your Referral Code<br />
                    & gain 200 Myntra coins</h1>
                <div className="w-11/12 sm:w-5/6 md:3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
                    <form className="w-full flex flex-col text-gray-700">
                        <input type="text" id="referral" onChange={e => setReferral(e.target.value)} className="shadow-sm mb-4 p-1 w-full rounded px-2 border" />
                        <Link to='/'><button className="w-full shadow-md rounded my-3 p-2 bg-blue-500 font-bold text-white">Proceed</button></Link>
                    </form>
                    <p>Don't have a referral code? <Link to="/" className="text-blue-400">Skip</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Referral
