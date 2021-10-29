import React, { useState } from 'react'

export const appContext = React.createContext({})

function ContextProvider({ children }) {
    const [context, setContext] = useState({
        loggedIn:false,
        token:"",
        user:{}
    })
    return (
        <appContext.Provider value = {[context,setContext]}>
            { children }
        </appContext.Provider>
    )
}

export default ContextProvider
