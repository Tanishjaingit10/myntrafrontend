import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/screens/Home"
import Signin from "./components/screens/Login"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"
import ContextProvider from './context/Context'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact> <Home/> </Route>
        <Route path="/signin" exact> <Signin/> </Route>
        <Route path="/profile" exact> <Profile/> </Route>
        <Route path="/signup" exact> <Signup/> </Route>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
