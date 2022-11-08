import React from 'react';
import Services from '../../Component/Services/Services';

const ServicesCard = ({service}) => {

    const {title, banner} = service
    return (
        <div className='mt-5 mb-5 mx-auto'>
      

      <div className="card w-96 bg-base-100 shadow-xl my-4 ">

  <figure className="px-10 pt-10">

    <img  src={banner}alt="Shoes" className="rounded-xl" />

  </figure>

  <div className="card-body items-center text-center">

    <h2 className="card-title text-error font-bold">{title}</h2>

    <p>If a dog chews shoes whose shoes does he choose?</p>

    <div className="card-actions">

      <button className="btn btn-wraning btn-outline btn-sm">Book Now</button>
      <button className="btn btn-wraning btn-outline btn-sm">Details</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;