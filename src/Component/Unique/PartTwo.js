import React from 'react';
import { Link } from 'react-router-dom';
import picc from '../../assets/unique/part2.jpg'

const PartTwo = () => {
    return (
        <div>
     <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-10 mx-auto mb-10">
                <figure><img src={picc} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">Welcome to Creative Photography</h2>
                    <p> One of the most committed, artistic, honest & experienced wedding photographers in the northern Indiana area, there's no better investment than Creative Photography.
                    </p>
                    <Link to='/services'> <button className="btn btn-wide btn-primary">OUR SERVICES</button></Link>
                </div>
            </div>

        </div>
    );
};

export default PartTwo;