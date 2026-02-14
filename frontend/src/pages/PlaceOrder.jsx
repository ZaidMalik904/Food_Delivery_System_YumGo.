import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const PlaceOrder = () => {

    const { getTotalCartAmount, token, url, food_list, cartItems } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const navigate = useNavigate();

    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo['quantity'] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,
        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        }
        else {
            alert(response.data.message);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/cart');
        }
        else if (getTotalCartAmount() === 0) {
            navigate('/cart');
        }
    }, [token])

    return (
        <form onSubmit={placeOrder} className='place-order flex items-start justify-between gap-12 mt-24 px-[5vw] mb-20'>
            <div className="place-order-left w-full max-w-[max(30%,500px)]">
                <p className="title text-[30px] font-semibold mb-[50px]">Delivery Information</p>
                <div className="multi-fields flex gap-2.5">
                    <input name='firstName' onChange={onChangeHandler} value={data.firstName} required type="text" placeholder='First name' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                    <input name='lastName' onChange={onChangeHandler} value={data.lastName} required type="text" placeholder='Last name' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                </div>
                <input name='email' onChange={onChangeHandler} value={data.email} required type="email" placeholder='Email address' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                <input name='street' onChange={onChangeHandler} value={data.street} required type="text" placeholder='Street' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                <div className="multi-fields flex gap-2.5">
                    <input name='city' onChange={onChangeHandler} value={data.city} required type="text" placeholder='City' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                    <input name='state' onChange={onChangeHandler} value={data.state} required type="text" placeholder='State' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                </div>
                <div className="multi-fields flex gap-2.5">
                    <input name='zipCode' onChange={onChangeHandler} value={data.zipCode} required type="text" placeholder='Zip code' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                    <input name='country' onChange={onChangeHandler} value={data.country} required type="text" placeholder='Country' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
                </div>
                <input name='phone' onChange={onChangeHandler} value={data.phone} required type="text" placeholder='Phone' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[tomato]' />
            </div>
            <div className="place-order-right w-full max-w-[max(40%,500px)]">
                <div className="cart-total flex-1 flex flex-col gap-5">
                    <h2 className='text-2xl font-bold'>Cart Totals</h2>
                    <div className='flex flex-col gap-2.5 text-[#555]'>
                        <div className="cart-total-details flex justify-between">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='m-2.5' />
                        <div className="cart-total-details flex justify-between">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className='m-2.5' />
                        <div className="cart-total-details flex justify-between">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button type='submit' className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer mt-[30px]'>PROCEED TO PAYMENT</button>
                    <Link to="/#food-display" className='text-[tomato] font-medium mt-3 hover:underline w-fit'>+ Add more items</Link>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
