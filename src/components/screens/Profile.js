import React, { useContext, useEffect } from 'react'
import Footer from "../Footer"
import { Button, Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { appContext } from '../../Store/Context';
import axios from 'axios';
import { BACKEND } from '../../Keys';
import {FiCopy}  from 'react-icons/fi'

function Profile() {
    const {context, setContext} = useContext(appContext)

    useEffect(() => {
        let config = {
            headers: {
                'Authorization': `Bearer ${context?.token}`
            }
        }
        axios.get(`${BACKEND}/getUser`,config)
        .then(res=>{setContext(prev=>{return{...prev,user:res.data}})})
        .catch(err=>console.log(err))
    }, [context?.token,setContext])

    const copyReff = () =>{
        navigator.clipboard.writeText(context.user.referral)
        document.execCommand('copy');
    }
    
    return (
        <div>
            <div className="container-fluid" style={{ marginTop: '120px' }}>
                <div className="card mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
                    <div className="row g-0 items-center">
                        <div className="col-md-4">
                            <img src={context.user?.picture} className="img-fluid rounded-full w-full" alt="Profile pic" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body flex items-center justify-center flex-col">
                                <h5 className="card-title text-center">{context.user?.name}</h5>
                                <br />
                                <p className="card-text">{context.user?.email}</p>
                                <p className="card-text flex items-center w-40 justify-around"><b>Referral: </b>{context.user?.referral} <button onClick={copyReff}><FiCopy/></button></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-5" style={{ maxWidth: '500px', margin: 'auto' }}>
                    <h5 className="card-header text-center"><span className="text-xl font-bold text-pink-500">Myntra Coins</span></h5>
                    <div className="card-body">
                        <h5 className="card-title mb-4 text-center">Total number of myntra coins earned - <span className="text-pink-500">{context.user?.coins}</span></h5>

                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Learn how to redeem your myntra coins</Accordion.Header>
                                <Accordion.Body>
                                    1) Add products to cart. <br />
                                    2) Proceed to cart, here you will see the payment details. <br />
                                    3) You can use the available coins to reduce the payment price. <br />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Learn how to earn Myntra coins</Accordion.Header>
                                <Accordion.Body>
                                    1) First time SignUp into Myntra - <b>100 coins</b><br/>
                                    2) Ask your friends to use your referral code to sign up into Myntra - <b>100 coins</b><br/>
                                    3) Daily Login using your account - <b>10 coins</b><br />
                                    4) Submit your feedback regarding products, features, etc - <b>10 coins</b><br/>
                                    5) Playing daily quizzes on games page - <b>4 coins</b> per correct answer<br/>                 
                                    6) Stars of the Week - <b>50 bonus coins</b><br/>
                                    7) Purchasing product - <b>10% bonus coins</b> of total price<br/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br/>
                        <Link to="/cart"><Button variant="primary">Redeem Now </Button></Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Profile

