import React from 'react'
import { useRef,useState } from 'react'

const LoginRef = () => {
  let buttontag = useRef(null)
  let [terms,setTerms] = useState(false)

  let checkHandler = (event) => {
   setTerms(event.target.checked)
   buttontag.current.disabled = !event.target.checked
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(terms)}</pre>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1>
              Login
              </h1>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input className='form-control' type="email" placeholder='Enter your Email' />
                </div>
                <div className="form-group">
                  <input className='form-control' type="password" placeholder='password' />
                </div>
                <div className="form-check">
                  <input className='form-input-check' type="checkbox" onClick={checkHandler} />Terms and Conditions
                </div>
                <div className="form-group">
                  <input className='btn btn-primary' type="submit" value="Login" ref={buttontag} disabled />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginRef