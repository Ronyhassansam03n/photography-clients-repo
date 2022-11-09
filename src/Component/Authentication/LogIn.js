import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/logsign/login.png'

const LogIn = () => {
    return (
        <div>
          <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">

    <div className="text-center lg:text-left">

      <h1 className="text-4xl text-center font-bold mb-5">Please Login ! </h1>

     <img src={login} alt="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-2xl text-center font-semibold text-error "> Login now! </h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
           <p>Create a new account <Link to='/register' className="text-warning font-semibold link link-hover"> Register</Link></p> 
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;