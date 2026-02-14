import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-[50px] pt-[80px]'>
            <h2 className='text-[34px] font-bold font-["Outfit"] text-black ml-[20px] md:ml-[80px]'>My Orders</h2>

            <div className='flex flex-col gap-5 mt-[15px]'>
                {data.map((order, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[10px] md:gap-[30px] w-[90%] mx-auto text-[12px] md:text-[14px] py-[10px] px-[20px] text-[#454545] rounded-lg border border-[tomato]'>

                        <img className='w-[50px]' src={assets.parcel_icon} alt="" />

                        <p>{order.items.map((item, index) => {
                            if (index === order.items.length - 1) {
                                return item.name + " x " + item.quantity;
                            } else {
                                return item.name + " x " + item.quantity + ", ";
                            }
                        })}</p>

                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>

                        <p>
                            <span className='text-[tomato]'>&#x25cf;</span>
                            <b className='font-medium text-[#454545]'> {order.status}</b>
                        </p>

                        <button onClick={fetchOrders} className='border-none py-3 px-0 rounded bg-[#ffe1e1] cursor-pointer text-black font-medium text-[10px] md:text-[14px]'>
                            Track Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyOrders