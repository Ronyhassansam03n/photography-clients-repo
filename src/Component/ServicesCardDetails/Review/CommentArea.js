import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import CommentBox from './CommentBox';

const CommentArea = () => {

    const { user } = useContext(AuthContext)

    const [myReviews, setMyReview] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))

    }, [user?.email])

    return (
        <div>
            <h2 className='text-4xl text-error font-semibold'> YOU HAVE  : 0{myReviews.length} COMMENTS</h2>

            {

myReviews.map(myReview => <CommentBox

    key={myReview._id}
    myReview={myReview}

></CommentBox>)

}


        </div>
    );
};

export default CommentArea;