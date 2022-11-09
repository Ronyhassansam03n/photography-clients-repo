import React, { useEffect, useState } from 'react';
import ServicesCard from '../../SharedPage/ServicesCard/ServicesCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then( res => res.json())
        .then(data => setServices(data))


    },[])
    return (
        <div >

            
            <h1 className='text-4xl font-semibold text-orange-600 '> Our Services Area</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
            services.map(service => <ServicesCard
            
            key={service._id}
            service={service}
            ></ServicesCard>)
        }

            </div>
            
       
        </div>
    );
};

export default Services;