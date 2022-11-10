import React, { useEffect, useState } from 'react';
import ThreeServiceCard from './ThreeServiceCard';

const ServiceThree = () => {


        const [threeServices, setThreeServices] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:5000/three')
            .then( res => res.json())
            .then(data => setThreeServices(data))
    
    
        },[])


    return (
        <div >

            
            <h1 className='text-4xl font-semibold text-orange-600 '> Our Services Area</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
            threeServices.map(three => <ThreeServiceCard
                key={three._id}
                three={three}
            ></ThreeServiceCard>
            
           
            )
        }

            </div>
            
       
        </div>
    );
};

export default ServiceThree;