import React from 'react'

const menu_list = [
    { menu_name: "Salad", menu_image: "/menu_1.png" },
    { menu_name: "Rolls", menu_image: "/menu_2.png" },
    { menu_name: "Desserts", menu_image: "/menu_3.png" },
    { menu_name: "Sandwich", menu_image: "/menu_4.png" },
    { menu_name: "Cake", menu_image: "/menu_5.png" },
    { menu_name: "Pure Veg", menu_image: "/menu_6.png" },
    { menu_name: "Pasta", menu_image: "/menu_7.png" },
    { menu_name: "Noodles", menu_image: "/menu_8.png" },
    { menu_name: "Pizza", menu_image: "/menu_9.png" },
    { menu_name: "Burger", menu_image: "/menu_10.png" },
    { menu_name: "Ice Cream", menu_image: "/menu_11.png" },
    { menu_name: "Drinks", menu_image: "/menu_12.png" },
]

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu flex flex-col gap-6 px-[5vw] pt-10' id='explore-menu'>
            <h1 className='text-[#262626] font-bold text-3xl md:text-5xl text-center md:text-left'>Explore our menu</h1>
            <p className='explore-menu-text w-full max-w-full md:max-w-[60%] text-[#808080] text-sm md:text-base text-center md:text-left leading-relaxed'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list flex items-center justify-start gap-6 md:gap-[30px] overflow-x-auto no-scrollbar pb-4 scroll-smooth">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item cursor-pointer flex-shrink-0 flex flex-col items-center transition-transform hover:scale-105 active:scale-95'>
                            <img src={item.menu_image} alt={item.menu_name} className={`w-24 h-24 md:w-[7.5vw] md:h-[7.5vw] min-w-[80px] min-h-[80px] rounded-full object-cover transition-all duration-300 shadow-md ${category === item.menu_name ? "border-4 border-[tomato] p-1 shadow-lg scale-105" : "border-2 border-transparent hover:border-[#ffe1e1]"}`} />
                            <p className={`mt-3 text-sm md:text-[max(1.4vw,16px)] font-medium transition-colors ${category === item.menu_name ? "text-[tomato] font-bold" : "text-[#747474]"}`}>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-4 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
