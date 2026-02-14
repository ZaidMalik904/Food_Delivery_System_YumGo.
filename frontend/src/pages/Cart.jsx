import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = ({ setShowLogin }) => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount, token, url } = useContext(StoreContext);

    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!token) {
            setShowLogin(true);
        } else {
            navigate('/place-order');
        }
    }

    return (
        <div className='cart mt-[100px] px-[5vw]'>
            <div className="cart-items">
                <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] py-2.5 text-black'>
                                    <img src={url + "/images/" + item.image} alt="" className='w-[12vw]' />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <Trash onClick={() => removeFromCart(item._id)} className='cursor-pointer w-4 text-[tomato]' />
                                </div>
                                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse">
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
                    <button onClick={handleCheckout} className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
                    <Link to="/#food-display" className='text-[tomato] font-medium mt-2 hover:underline w-fit'>+ Browse More Items</Link>
                </div>
                <div className="cart-promocode flex-1 justify-start">
                    <div>
                        <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded'>
                            <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none pl-2.5' />
                            <button className='w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
