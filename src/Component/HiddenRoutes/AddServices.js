import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddServices = () => {

    const {title, price, _id} = useLoaderData();
    const {user} = useContext(AuthContext);
    

    const  handleOrder = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregister email';
        const number = form.number.value;
        const message = form.message.value;

        const order = {

            service: _id,
            serviceName : title,
            price,
            client : name,
            email,
            number,
            message

        }


        fetch('https://photographer-server-five.vercel.app/orders', {

            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },

            body: JSON.stringify(order)
        })
        .then (res => res.json())
        .then(data => {
            
            console.log(data)
            if(data.acknowledged){
               alert('Your order placed  Successfully')
                form.reset()
            }
        
        
        })
        .catch(error => console.error(error))


        




    }

    return (
        <div>

            <form onSubmit={handleOrder}>

                <h2 className='text-3xl mb-5 font-semibold ml-5 '> Your Package: {title}</h2>
                <h2 className='text-2xl mb-5 font-semibold ml-5 text-error'> Price: ${price}</h2>


            <div className='grid  grid-cols-1 lg: grid-cols-1 mb-5 gap-5 ml-5'>

            <input type="text" name='name'  placeholder="Full name" className="input input-bordered w-full max-w-xs " />
            <input type="text" name='number' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />

            <textarea name='message' className="textarea textarea-bordered  w-full max-w-xs " placeholder=" Enter your message"></textarea>


                <input className='btn w-full max-w-xs' type="submit" value="Place Your Order" />
            </div>
            
            </form>
            
        </div>
    );
     
};

export default AddServices;