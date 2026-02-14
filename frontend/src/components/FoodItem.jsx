import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Plus, Minus } from 'lucide-react'

const FoodItem = ({ id, name, price, description, image, setShowLogin }) => {

    const { cartItems, addToCart, removeFromCart, token, url } = useContext(StoreContext);

    const handleAddToCart = (id) => {
        if (!token) {
            setShowLogin(true);
        } else {
            addToCart(id);
        }
    }

    return (
        <div className='food-item w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition duration-300 animate-fadeIn'>
            <div className="food-item-img-container relative">
                <img className='food-item-image w-full h-[220px] object-cover rounded-t-[15px]' src={url + "/images/" + image} alt="" />
                {!cartItems[id]
                    ? <Plus className='add absolute bottom-[15px] right-[15px] cursor-pointer rounded-full bg-white w-[35px] h-[35px] p-1' onClick={() => handleAddToCart(id)} />
                    : <div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white'>
                        <Minus className='w-[30px] h-[30px] p-1 text-[tomato] bg-[#fff2ef] rounded-full cursor-pointer' onClick={() => removeFromCart(id)} />
                        <p>{cartItems[id]}</p>
                        <Plus className='w-[30px] h-[30px] p-1 text-[#60b246] bg-[#e6f7e9] rounded-full cursor-pointer' onClick={() => handleAddToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-item-info p-5">
                <div className="food-item-name-rating flex justify-between items-center mb-2.5">
                    <p className='text-lg font-medium'>{name}</p>
                    {/* Rating stars could go here */}
                    <div className="text-[tomato]">★★★★☆</div>
                </div>
                <p className="food-item-desc text-[#676767] text-sm">{description}</p>
                <p className="food-item-price text-[tomato] text-[22px] font-medium my-2.5">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
