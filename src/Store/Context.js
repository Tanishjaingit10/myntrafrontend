import React, { useEffect, useState } from 'react'

export const appContext = React.createContext({})

function ContextProvider({ children }) {

    const InitialState = {
        loggedIn:false,
        token:"",
        user:{},
        cart:[]
    }
    
    const [context, setContext] = useState(InitialState)

    const clear = () => {
        setContext(InitialState)
    }

    let reducer = {
        clear
    }
    
    useEffect(()=>{
        let t = localStorage.getItem("localContext")
        if(t)setContext(JSON.parse(t))
    },[])

    useEffect(() => {
        localStorage.setItem("localContext",JSON.stringify(context))
    }, [context])
    
    return (
        <appContext.Provider value = {{context,setContext,reducer}}>
            { children }
        </appContext.Provider>
    )
}

export default ContextProvider
