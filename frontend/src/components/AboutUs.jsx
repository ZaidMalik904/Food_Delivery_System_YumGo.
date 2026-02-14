import React from 'react'

const AboutUs = () => {
    return (
        <div className='about-us my-[80px] mx-[5vw] flex flex-col gap-10' id='about-us'>
            <div className='flex flex-col gap-2 items-center text-center'>
                <h1 className='text-[#262626] font-semibold text-[max(2.5vw,30px)]'>About Us</h1>
                <div className='w-20 h-1 bg-[tomato] rounded-full'></div>
            </div>
            <div className='flex flex-col lg:flex-row items-stretch gap-10'>
                {/* Left Content Box */}
                <div className="about-us-left flex-1 bg-[#fffaf9] p-10 lg:p-14 rounded-3xl border border-[#ffe4e0] shadow-sm flex flex-col justify-center gap-6 animate-fadeIn">
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-[#262626] text-[max(3vw,24px)] leading-tight'>Connecting You with the Food You Love</h2>
                        <div className='w-16 h-1 bg-[tomato] rounded-full'></div>
                    </div>
                    <p className='text-[#494949] text-lg leading-relaxed'>
                        At <span className='text-[tomato] font-bold italic'>YumGo.</span>, we believe that great food should be accessible to everyone, anywhere.
                        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                    </p>
                    <div className='grid grid-cols-2 gap-8 mt-4'>
                        <div className='flex flex-col bg-white p-4 rounded-2xl shadow-sm border border-[#f3f3f3]'>
                            <span className='text-[tomato] font-bold text-3xl'>50k+</span>
                            <span className='text-[#676767] text-sm uppercase font-semibold tracking-wider'>Happy Customers</span>
                        </div>
                        <div className='flex flex-col bg-white p-4 rounded-2xl shadow-sm border border-[#f3f3f3]'>
                            <span className='text-[tomato] font-bold text-3xl'>500+</span>
                            <span className='text-[#676767] text-sm uppercase font-semibold tracking-wider'>Partners</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="about-us-right flex-1 min-h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                        alt="About Us"
                        className='w-full h-full object-cover rounded-xl shadow-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
