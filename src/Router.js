/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Home from "./components/screens/Home"
import Cart from "./components/screens/Cart"
import Contact from "./components/screens/Contact"
import Games from "./components/screens/Games"
import Signin from "./components/screens/Login"
import Profile from "./components/screens/Profile"
import Referral from "./components/screens/Referral"
import Signup from "./components/screens/Signup"
import { appContext } from './Store/Context'

function Router() {

    const [context,setContext] = useContext(appContext)
    const loggedIn = context.loggedIn
    
    return (
        <BrowserRouter>
            <Navbar/>
            <Route path="/" exact> <Home/> </Route>
            <Route path="/signin" exact> { loggedIn? <Redirect to="/"/>:<Signin/>} </Route>
            <Route path="/referral" exact> { loggedIn? <Referral/>:<Redirect to="/signup"/>}  </Route>
            <Route path="/profile" exact> { loggedIn? <Profile/>:<Redirect to="/signin"/>}  </Route>
            <Route path="/cart" exact> { loggedIn? <Cart/>:<Redirect to="/signin"/>}  </Route>
            <Route path="/contact" exact> { loggedIn? <Contact/>:<Redirect to="/signin"/>}  </Route>
            <Route path="/games" exact> { loggedIn? <Games/>:<Redirect to="/signin"/>}  </Route>
            <Route path="/signup" exact> { loggedIn? <Redirect to="/referral"/>:<Signup/>} </Route>
        </BrowserRouter>
    )
}

export default Router
