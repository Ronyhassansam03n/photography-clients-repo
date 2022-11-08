import React from 'react';
import { Link } from 'react-router-dom';
import image404 from '../../assets/404Page/404.jpg'

const AboutUs = () => {
    return (
        <div className='flex'>
            <div>
                <img src={image404} alt="" />
            </div>

            <div className='mt-24 ml-20'>
                <h1 className='text-6xl font-bold  py-3 ml-28'> Oops ! </h1>

                <h3 className='text-3xl font-semibold py-3'> 404- THIS PAGE IS NOT FOUND</h3>
                <Link to="/"> <button className="btn btn-wide ml-20">GO TO HOMEPAGE</button></Link> 
            </div>


        </div>
    );
};

export default AboutUs;