import React, { Component, useState } from 'react'
import './Loginstyles.css';
import {useNavigate} from 'react-router-dom'
function Login() {
  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  // This event is responsible for input field - allowss you to enter text.

  let navigate = useNavigate();
  function onSubmitHandler(e){
    // To prevent refreshing of page on clicking submit button.
    e.preventDefault();
    navigate("/news");
  }
  return (
    <div className='main'>
        <form onSubmit = {onSubmitHandler} className="login-form">
            <h1>Login page</h1>
            <div>
                <input className="input-field" type="text" name="username" value={username} placeholder="Username" onChange={(e)=>setUserName(e.target.value)} required></input>
            </div>
            <div>
                <input className="input-field" type="text" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div>
                <input className="input-field" type="passsword" name="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required></input>
            </div>
            <button type='submit' className='button'>Submit</button>
        </form>
      </div>
    )
  }

export default Login
