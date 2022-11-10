import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesCarddetails = () => {

 const {title, img, description, duration, price, _id} = useLoaderData()
 

    return ( 
        <div>
             <h2 className='text-5xl font-semibold text-error mb-10'> {title}</h2>
             <img className='w-3/4 mx-auto rounded-lg' src={img} alt="" /> <br />
             <p className='text-1xl'>{description}</p><br />
             <p className='text-2xl'> Duration : {duration}</p> <br />
             <p className='text-3xl font-semibold text-error'> Price : $ {price}</p><br />

             <Link  to={`/add/${_id}`} className="btn mx-1 btn-outline mb-10 " >Add Services</Link>


        </div>
    );
};

export default ServicesCarddetails;