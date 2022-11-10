import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Comment = () => {

    const {_id} = useLoaderData();
    const {user} = useContext(AuthContext);
    

    const  handleReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Unregister email';
        const message = form.message.value;

        const myReview = {
            reviews : _id,
           reviewer: name,
            email,
            message,

            

        }


        fetch('https://photographer-server-five.vercel.app/reviews', {

            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },

            body: JSON.stringify(myReview)
        })
        .then (res => res.json())
        .then(data => {
            
            console.log(data)
            if(data.acknowledged){
               alert('Your comment added  Successfully')
                form.reset()
            }
        
        
        })
        .catch(error => console.error(error))


        




    }
    return (
        <div>


            <form onClick={handleReview}>

            <input type="text" name='name'  placeholder="Full name" className="input input-bordered w-full max-w-xs " />
            <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />

             <textarea name='message' className="textarea textarea-bordered grid mb-2 w-1/2 " placeholder=" your Comment">

                </textarea>

                <input className='btn btn-sm mb-10' type="submit" value="Comment" />



            </form>

        </div>
    );
};

export default Comment;