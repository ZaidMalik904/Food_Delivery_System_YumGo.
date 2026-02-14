import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const FloatingCart = () => {
    const { getTotalCartAmount, cartItems } = useContext(StoreContext);
    const location = useLocation();

    // Calculate total items in cart
    const totalItems = Object.values(cartItems || {}).reduce((acc, curr) => acc + curr, 0);

    // Hide if cart is empty or we are on specific pages
    if (getTotalCartAmount() === 0 || location.pathname === '/cart' || location.pathname === '/place-order') {
        return null;
    }

    return (
        <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[min(90vw,400px)]'>
            <Link to='/cart' className='flex items-center justify-between bg-[#323232] text-white py-4 px-6 rounded-2xl shadow-2xl transition hover:bg-[#454545] active:scale-95 animate-bounce-subtle'>
                <div className='flex items-center gap-3'>
                    <div className='relative'>
                        <ShoppingBag size={24} className='text-[tomato]' />
                        <span className='absolute -top-2 -right-2 bg-[tomato] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#323232]'>
                            {totalItems}
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs text-gray-400 font-medium uppercase tracking-wider'>View Cart</span>
                        <span className='text-lg font-bold'>${getTotalCartAmount() + 2}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-semibold'>Go to Cart</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default FloatingCart
