import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category, setShowLogin }) => {

    const { food_list } = useContext(StoreContext);
    const [expanded, setExpanded] = useState(false);

   
    const filteredList = food_list.filter(item => category === "All" || category === item.category);

    
    const displayList = expanded ? filteredList : filteredList.slice(0, 8);

    return (
        <div className='food-display mt-[30px] px-[5vw]' id='food-display'>
            <h2 className='text-[max(2vw,24px)] font-semibold'>Top dishes near you</h2>
            <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[30px] gap-[30px] gap-y-[50px]">
                {displayList.map((item, index) => {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} setShowLogin={setShowLogin} />
                })}
            </div>
            {filteredList.length > 8 && (
                <div className='flex justify-center mt-10'>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className='bg-[#494949] text-white px-8 py-3 rounded-full text-lg cursor-pointer transition duration-300 hover:bg-[#323232] active:scale-95 shadow-md'
                    >
                        {expanded ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    )
}

export default FoodDisplay
