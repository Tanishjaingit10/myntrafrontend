import React from 'react'
import Footer from "../Footer"

function Cart() {
    return (
        <div>
            <div className="h-screen w-screen flex items-center justify-center text-3xl m-8 text-gray-700 font-bold">
                Your Cart is empty
            </div>
            <Footer />
        </div>
    )
}

export default Cart