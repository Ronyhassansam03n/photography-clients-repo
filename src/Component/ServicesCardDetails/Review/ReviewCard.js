import React from 'react';

const ReviewCard = ({review}) => {
    
    const {name, img, comment } = review


    return (
        <div className='mb-10'>
           <div className="overflow-x-auto w-1/2 ">
  <table className="table w-1/2">

    
    <tbody>
      
      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <p> Comment : {comment}</p>
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

export default ReviewCard;