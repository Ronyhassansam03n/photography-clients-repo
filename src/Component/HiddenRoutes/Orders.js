import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Extra from '../Extra';



const Orders = () => {

    const {user} = useContext(AuthContext);

    const [orders, setOrders] = useState([])

    
    
    useEffect(() =>{

        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    },[user?.email])



    return (
        <div>
            <h2 className='text-2xl font-bold text-error mb-5'> YOUR HAVE : 0{orders.length} orders.</h2>
            
            {
                orders.map(order => <Extra 
                    
                    key={orders._id}
                    order={order}
                    ></Extra>)
            }

        </div>
    );
};

export default Orders;