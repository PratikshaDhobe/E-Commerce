import React from 'react'
import login from'./Login.css'

function Login() {
  return (
    <div>
       <center>
       <form>
       <h1>Login</h1>
       <br />
       <h6>Email</h6>
      <input type="text" id='xyz' placeholder='Enter email'/>
      
      <h6>Password</h6>
      <input type="text" id='xyz' placeholder='Enter the password'/>
      <br />
      <br />
      <div className="d-grid gap-2 col-2 mx-auto py-2">
            <button  className="bottom btn btn-success  text-light border border-light">
             Sign Up
            </button>
            Create account
          </div>
      </form>
       </center>
    </div>
  )
}

export default Login
