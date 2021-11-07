import React, { useEffect, useState } from 'react'

export const appContext = React.createContext({})

function ContextProvider({ children }) {
    const [context, setContext] = useState({
        loggedIn:false,
        token:"",
        user:{},
        cart:[]
    })
    useEffect(() => {
        // console.log("context",context)
        // console.log("stringify",JSON.stringify(context))
        // localStorage.setItem("localContext",JSON.stringify(context))
        // console.log(JSON.parse(localStorage.getItem("localContext")))
    }, [context])
    return (
        <appContext.Provider value = {[context,setContext]}>
            { children }
        </appContext.Provider>
    )
}

export default ContextProvider
