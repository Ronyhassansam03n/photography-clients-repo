import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {

 const manu = 
 <> 
   <li> 

    <Link className='font-semibold ' to='/'> HOME</Link>
    <Link className='font-semibold ' to='/services'> SERVICES</Link>
    <Link className='font-semibold ' to='/blog'> BLOGS</Link>
    <Link className='font-semibold ' to='/about'> ABOUT US</Link>
   
    
    
    </li>  
  </>

    return (
        <div>

            <div className="navbar bg-base-100">

                <div className="navbar-start">

                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost lg:hidden">


                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>



                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {manu}
                        </ul>



                    </div>
                    <Link to='/'> <img width="100" height="100" src={logo} alt="" />  </Link>
                    <h4 className='text-2xl font-medium'> Creative Photography</h4>
                </div>



                <div className="navbar-center hidden lg:flex">


                    <ul className="menu menu-horizontal p-0">
                            {manu}
                    </ul>


                </div>





                <div className="navbar-end">
                    <Link to='/login' className="btn mx-1 btn-outline btn-sm" >Log in</Link>
                    <Link to='/register' className="btn btn-outline btn-sm">Sign Up</Link>
                </div>
            </div>



        </div>
    );
};

export default Header;