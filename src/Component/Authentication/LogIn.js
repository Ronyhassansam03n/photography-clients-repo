import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/logsign/login.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const LogIn = () => {

    const {googleLogIn, signIn} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();


    const googleHandle = () => {
        googleLogIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })

        .catch(error => console.error(error))

    }



    const logIn = event => {
        event.preventDefault()


        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value ;
       

        signIn (email, password)

        .then(result => {
            const user =result.user;
                console.log(user)
        })
        .catch(error => console.error(error))


    }

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

      <form onSubmit={logIn} className="card-body">

        <div className="form-control">

          <label className="label">
            
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
           <p>Create a new account <Link to='/register' className="text-warning font-semibold link link-hover"> Register</Link></p> 
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-danger mb-5">Login</button>
        <p >or </p>
          <button onClick={googleHandle} className="btn btn-outline btn-danger">Login via google</button>

            

        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;