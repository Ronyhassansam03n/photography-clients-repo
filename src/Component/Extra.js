import React from 'react';


const Extra = ({order}) => {


    const {client, serviceName, price, } = order
    return (
        <div>
          <div className="overflow-x-auto w-1/2 ml-5">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
           
          </label>
        </th>
        <th >Name</th>
        <th className='text-center font-bold '>Package</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">

              </div>
            </div>
            <div>
              <div className=" text-center ">{client}</div>
              
            </div>
          </div>
        </td>

        <td className='text-center  text-error'>
          {serviceName}
        </td>

        <td>{price}</td>

        <th className='mx-auto'>
        <button className="btn  btn-sm">X</button>
        </th>
      </tr>
    
      
    
      
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Extra;