import React from 'react';
import { FaRegUser } from "react-icons/fa";
const CommentBox = ({myReview, handleDelete}) => {

    const {sms, reviewer, _id} = myReview;

    return (
        <div >
        <div className="overflow-x-auto w-1/2 ">
            <table className="table w-1/2">
                <tbody>

                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <button  onClick={() => handleDelete(_id)} className='btn-sm btn-ghost btn-outline rounded'> X </button>
                                <div className="avatar">
                                <FaRegUser></FaRegUser>
                                </div>
                                <div>
                                
                                    <div className="font-bold"> Name : {reviewer}</div>
                                    <p> My Comment : {sms}</p>
                                </div>
                            </div>
                        </td>
                    </tr>



                </tbody>


            </table>
        </div>

       
    </div>
    );
};

export default CommentBox;