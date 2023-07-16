import React from "react";
import Navbar from "./navbar";
const Login = () => {
  return (
    <>
        <Navbar />
        <div className='d-flex justify-content-center align-items-center mt-5 vh-100'>
      <div className='border border-dark p-4 bg-white rounded'>
      
        <form>
            <h2 className="text-center">Login</h2>
            <div>
                <label htmlFor='email'>Email</label>
                <input type = "email" placeholder='Email' name='Email' className='form-control' />
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type = "password" placeholder='Password' name='Password' className='form-control' />
            </div>
            <div className="mb-3">
                <input type="checkbox" className="custom-control custom-checkbox me-1"/>
                < label htmlFor = "checkbox">Remeber-Me</label>
                </div>
            <div className = "mb-3 d-grid">
                    <button className="btn btn-danger" type="submit" >Login </button>
            </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;