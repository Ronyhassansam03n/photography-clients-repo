import React from 'react';
import pic from '../../assets/unique/part1.jpg'

const PartOne = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-10 mx-auto">
                <figure><img src={pic} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">WHY YOU CHOOSE US!</h2>
                    <p> One of the most committed, artistic, honest & experienced wedding photographers in the northern Indiana area, there's no better investment than Creative Photography.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default PartOne;