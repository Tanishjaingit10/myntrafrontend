import axios from 'axios'
import React from 'react'
import { BACKEND } from '../../Keys'

function Home() {
    // wake call to backend
    axios.get(`${BACKEND}`)
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            Home
        </div>
    )
}

export default Home
