import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddServices = () => {

    const {title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    return (
        <div>

            <form>

                <h2 className='text-3xl mb-5 font-semibold ml-5 '> {title}</h2>
                <h2 className='text-2xl mb-5 font-semibold ml-5 text-error'> Price: ${price}</h2>


            <div className='grid  grid-cols-1 lg: grid-cols-1 mb-5 gap-5 ml-5'>

            <input type="text" placeholder="Full name" className="input input-bordered w-full max-w-xs " />
            <input type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />

            </div>
            
            </form>
            
        </div>
    );
     
};

export default AddServices;