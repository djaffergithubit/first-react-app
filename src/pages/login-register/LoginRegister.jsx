import React, { useState } from "react"
import NavBar from "../../components/Header/NavBar"
import Path from "../../components/Path/Path"
import Footer from "../../components/Footer/Footer"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import "./LoginRegister.css"

function LoginRegister(){

    let auth = getAuth()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [show, setShow] = useState(false)

    function handleLogin(){
        setShow(false)
    }

    function handleRegister(){
        setShow(true)
    }

    function submit(){
        if (show) {
            createUserWithEmailAndPassword(auth, form.email, form.password)
            .then(response => {
                console.log(response.user)
            })
            .catch(err => {
                alert(err.message)
            })   
        }else{
            signInWithEmailAndPassword(auth, form.email, form.password)
            .then(response => {
                console.log(response.user)
            })
            .catch(err => {
                alert(err.message)
            })
        }

    }

    function handleChange(event){
        const {name, value} = event.target
        setForm(prevForm => {
            return{
                ...prevForm,
                [name]: value
            }
        })
    }

    return <div>
        <NavBar/>
        <Path path = "Login"/>
        <div className="form-container">
        <div className="login-form-container">
            <div className="login-register">
                <span className={show ? "login color-1" : "login color-2"}  onClick={handleLogin}>Login</span>
                <span className={show ? "register color-2" : "register color-1"} onClick={handleRegister}>Our Register</span>
            </div>
            <form action="">
                <h3 className="title-text">{show ? "Register An Account" : "Login Your Account"}</h3>
                <div className="inputs-container">
                    <input className="username-input" 
                    type="text" 
                    placeholder="Username"
                    onChange={handleChange}
                    value={form.username}
                    />
                    {show && <input 
                    className="email-input" 
                    type="email" 
                    placeholder="Email address"
                    onChange={handleChange}
                    value={form.email}
                    />}
                    <input 
                    className="password-input" 
                    type="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    value={form.password}
                    />
                    {show ? <p className="warning">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in Our <strong>privacy policy</strong> .</p> : (<div className="remember-lost">
                        <div className="check">
                            <input type="checkbox" name="checkbox"/>
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <p className="password-forget">Lost your password ?</p>
                    </div>)}
                </div>
                <button className="login-register-btn" onClick={submit}>{show? "Register" : "Login"}</button>
            </form>
        </div>
        </div>
        
        <Footer/>
    </div>
}

export default LoginRegister