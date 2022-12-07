import React from 'react'
import { useState } from 'react'
const Login = () => {

let [user,setUser]=useState({email:"", password:""})

let updateHandler = (event) => {
    
        setUser({...user, [event.target.name] : event.target.value})
   }
    
  return (
    <div className='container'>
        <pre>{JSON.stringify(user)}</pre>
       
            <div className="row">
                <div className='col-md-8'>
                <div className="card">
                <div className="card-header bg-dark text-white">
                    <h1>Login form</h1>
                </div>
                <div className="card-body">
                <form>
        <div className='form-group'>Email Id : <input type="email" name="email" className='form-control' onChange={updateHandler}/></div>
        <div className='form-group'>Password : <input type='password' name="password" className='form-control' onChange={updateHandler}/></div>
        <div><input type="submit" value="Login" className='btn btn-primary' /></div>
        </form>
        </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Login