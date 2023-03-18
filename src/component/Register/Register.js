import React from 'react';
import './register.css';

const Register = () => {
  return (
    <>
      <div className="container" id='register-container'>
        <div className="row" id='register-row'>
          <div className="col" id='login'>
            <div className="container">
              <form className='login_form'>
                <h2>Welcome Back !</h2>
                <h4>LogIn With Email ID</h4>
                <div class="mb-3 mx-3 my-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 mx-3 my-3">
                  <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" id="register_btn" class="btn btn-outline-primary mx-3 my-3">Submit</button>
              </form>
            </div>
          </div>
          <div className="col" id='signup'>
            <div className="container">
              <form className='singup_form'>
                <h1> <small>New Here?</small> Don't Worry !</h1>
                <h3>Create a New Account</h3>
                <div class="mb-2 mx-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">Full Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 mx-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 mx-3 ">
                  <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 mx-3">
                  <label htmlFor="exampleInputPassword1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" id="singup_btn" class="btn btn-outline-primary mx-3 my-3">Create New Acount</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
