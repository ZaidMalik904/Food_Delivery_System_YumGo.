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

            <div className='flex flex-col gap-5 mt-8'>
                {data.map((order, index) => (
                    <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr] sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-3 sm:gap-8 w-full max-w-[1240px] mx-auto text-xs sm:text-sm py-4 px-5 sm:px-8 text-[#454545] rounded-xl border border-[tomato]/30 shadow-sm hover:shadow-md transition-shadow'>

                        <img className='w-12 mx-auto sm:mx-0' src={assets.parcel_icon} alt="" />

                        <p className='font-medium'>{order.items.map((item, index) => {
                            if (index === order.items.length - 1) {
                                return item.name + " x " + item.quantity;
                            } else {
                                return item.name + " x " + item.quantity + ", ";
                            }
                        })}</p>

                        <p className='font-bold text-black'>${order.amount}.00</p>
                        <p className='hidden sm:block'>Items: {order.items.length}</p>

                        <p className='flex items-center gap-2'>
                            <span className='text-[tomato] text-lg'>&#x25cf;</span>
                            <b className='font-semibold text-[#454545]'>{order.status}</b>
                        </p>

                        <button onClick={fetchOrders} className='border-none py-2.5 px-0 rounded-lg bg-[#ffe1e1] hover:bg-[#ffcfcf] transition-colors cursor-pointer text-black font-semibold text-[11px] sm:text-sm shadow-sm active:scale-95'>
                            Track Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyOrders