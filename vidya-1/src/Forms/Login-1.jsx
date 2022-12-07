import React from 'react'
import { useEffect, useState } from 'react'
const Login = () => {

    let [user,setUser]=useState({email:"", password:""})

    let emailHandler = (event) => {
            setUser({...user, email : event.target.value})
    }
    let passwordHandler  = (event) => {
        setUser({...user, password: event.target.value})
    }
  return (
    <form>
        <pre>{JSON.stringify(user)}</pre>
        <div>Email Id : <input type="email" onChange={emailHandler}/></div>
        <div>Password : <input type='password' onChange={passwordHandler}/></div>
        <div><input type="submit" value="Login" /></div>
    </form>
  )
}

export default Login