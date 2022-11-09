import React from 'react';

const ServicesCarddetails = ({details}) => {

    const { img, description, duration, price} = details;

    return (
        <div>
             <img src={img} alt="" />
             <p>{description}</p>
             <p>{duration}</p>
             <p>{price}</p>
        </div>
    );
};

export default ServicesCarddetails;