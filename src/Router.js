/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Home from "./components/screens/Home"
import Signin from "./components/screens/Login"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"
import { appContext } from './context/Context'

function Router() {

    const [context,setContext] = useContext(appContext)
    const loggedIn = context.loggedIn
    
    return (
        <BrowserRouter>
            <Navbar/>
            <Route path="/" exact> <Home/> </Route>
            <Route path="/signin" exact> { loggedIn? <Redirect to="/profile"/>:<Signin/>} </Route>
            <Route path="/profile" exact> { loggedIn? <Profile/>:<Redirect to="/"/>}  </Route>
            <Route path="/signup" exact> { loggedIn? <Redirect to="/profile"/>:<Signup/>} </Route>
        </BrowserRouter>
    )
}

export default Router