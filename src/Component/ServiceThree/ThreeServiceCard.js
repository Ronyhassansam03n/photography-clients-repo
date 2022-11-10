import React from 'react';
import { Link } from 'react-router-dom';

const ThreeServiceCard = ({three}) => {

    const {title, banner, short, duration, price, _id} = three
    return (
        <div className='mt-5 mb-5 mx-auto'>
      

      <div className="card w-96 bg-base-100 shadow-xl my-4 ">

  <figure className="px-10 pt-10">

    <img  src={banner}alt="Shoes" className="rounded-xl" />

  </figure>

  <div className="card-body items-center text-center">

    <h2 className="card-title text-error font-bold">{title}</h2>

    <p>{short}</p><br />

    <p>Duration : {duration}</p>
    <p className="card-title text-error font-bold">Price : $ {price}</p>

    <div className="card-actions">

      <button className="btn btn-wraning btn-outline btn-sm">Book Now</button>
      <Link to={`/card/${_id}`}><button className="btn btn-wraning btn-outline btn-sm">Details</button></Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default ThreeServiceCard;