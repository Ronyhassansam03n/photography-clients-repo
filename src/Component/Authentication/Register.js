import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/logsign/signup.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value ;
        const name = form.name.value ;
        const photo = form.photo.value ;

        createUser (email, password, name, photo)

        .then(result => {
            const user =result.user;
                console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left">

                        <h1 className="text-4xl text-center font-bold mb-5">Please Register!</h1>
                        <img src={register} alt="" />

                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-2xl text-center text-error font-semibold ">Register now!</h1>

                        <form onSubmit={handleRegister} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  name='photo' placeholder=" photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Already have an account! <Link to='/login' className="text-warning font-semibold link link-hover"> Log in </Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-danger">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;