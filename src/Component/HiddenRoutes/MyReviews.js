import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyComment from '../MyComment/MyComment';

const MyReviews = () => {

    const {user} = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    useEffect(() =>{

        fetch(`https://photographer-server-five.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    },[user?.email])


    return (
        <div>
            <h2 className='text-2xl font-bold text-error mb-5'> YOUR HAVE : 00</h2>
            
            {
                reviews.map(myReview => <MyComment
                

                    key={myReview._id}
                    order={myReview}
                ></MyComment>
                    
                    
                    )
            }

        </div>
    );
};

export default MyReviews;