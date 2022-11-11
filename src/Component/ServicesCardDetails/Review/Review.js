import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])


    return (
        <div>

            <h1 className='text-3xl font-semibold text-orange-600 '>  Our Customers feedback</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>

                {
                    reviews.map(review => <ReviewCard

                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }

            </div>

        </div>
    );
};

export default Review;