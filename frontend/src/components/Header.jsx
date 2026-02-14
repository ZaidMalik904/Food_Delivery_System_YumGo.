import React from 'react'

const Header = () => {
    return (
        <div className='header h-[50vh] md:h-[34vw] my-8 mx-4 md:mx-[5vw] bg-[url("/header_img.png")] bg-cover bg-center relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl' id='home'>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="header-contents absolute flex flex-col items-center md:items-start gap-4 md:gap-[1.5vw] max-w-[90%] md:max-w-[50%] bottom-8 md:bottom-[10%] left-0 right-0 mx-auto md:left-[6vw] md:right-auto md:mx-0 text-center md:text-left z-10 animate-slideUp">
                <h2 className='font-bold text-white text-4xl md:text-[max(4.5vw,40px)] font-outfit leading-tight drop-shadow-lg'>
                    Order Your <br className='hidden md:block' />Favourite Food Here
                </h2>
                <p className='text-white/90 text-sm md:text-[1.2vw] drop-shadow-md max-w-[400px] md:max-w-full'>
                    Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience.
                </p>
                <a href='#explore-menu'>
                    <button className='border-none text-[#747474] font-bold py-3 px-8 md:py-[1vw] md:px-[2.3vw] bg-white text-sm md:text-[max(1vw,13px)] rounded-full hover:bg-[tomato] hover:text-white transition-all duration-300 shadow-lg active:scale-95 cursor-pointer'>
                        View Menu
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header
