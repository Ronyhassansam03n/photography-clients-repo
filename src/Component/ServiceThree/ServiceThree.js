import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeServiceCard from './ThreeServiceCard';

const ServiceThree = () => {


    const [threeServices, setThreeServices] = useState([])

    useEffect(() => {
        fetch('https://photographer-server-two.vercel.app/three')
            .then(res => res.json())
            .then(data => setThreeServices(data))


    }, [])


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

            <div className='grid justify-items-center mb-10'>
                
                <Link to='/services'> <button className="btn btn-wide btn-black ">See All</button></Link>
                
               </div>
        </div>
    );
};

export default ServiceThree;