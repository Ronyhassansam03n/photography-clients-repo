import React, { useEffect, useState } from 'react';
import ServicesCarddetails from '../../ServicesCardDetails/ServicesCarddetails';

const ServicesDetails = () =>{

    const [serviceDetails, setServicesDetails] = useState([])

    useEffect(() => {

        fetch('services.json')
        .then( res => res.json())
        .then(data => setServicesDetails(data))


    },[])
    
    return (
        <div >

            
            <h1 className='text-4xl font-semibold text-orange-600 '> Our Services Area</h1>

            <div>

            {
            serviceDetails.map(details =>
            <ServicesCarddetails
            
            key={details._id}
            details={details}
            
            ></ServicesCarddetails>
            
            )
        }

            </div>
            
       
        </div>
    );
};

export default ServicesDetails;