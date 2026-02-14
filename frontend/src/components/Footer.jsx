import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center py-10 px-[5vw] mt-12' id='footer'>
            <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-10 max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-9">
                <div className="footer-content-left flex flex-col items-start gap-5">
                    <h2 className='text-[tomato] text-3xl font-bold ml-0'>YumGo.</h2>
                    <p className='text-[#d9d9d9] leading-relaxed m-0'>
                        Bringing the best flavors from your favorite local restaurants right to your doorstep.
                        Join us on our mission to make delicious food accessible, fast, and fresh for everyone, everywhere.
                    </p>
                    <div className="footer-social-icons flex gap-4">
                        <div className="w-10 h-10 border border-[#d9d9d9] rounded-full flex justify-center items-center cursor-pointer hover:bg-[tomato] hover:border-[tomato] transition"><Facebook size={20} /></div>
                        <div className="w-10 h-10 border border-[#d9d9d9] rounded-full flex justify-center items-center cursor-pointer hover:bg-[tomato] hover:border-[tomato] transition"><Twitter size={20} /></div>
                        <div className="w-10 h-10 border border-[#d9d9d9] rounded-full flex justify-center items-center cursor-pointer hover:bg-[tomato] hover:border-[tomato] transition"><Linkedin size={20} /></div>
                    </div>
                </div>
                <div className="footer-content-center flex flex-col items-start gap-5">
                    <h2 className='text-white text-2xl font-bold'>COMPANY</h2>
                    <ul className='list-none space-y-2.5'>
                        <li className='cursor-pointer hover:text-[tomato] transition'><a href="/#home">Home</a></li>
                        <li className='cursor-pointer hover:text-[tomato] transition'><a href="/#about-us">About us</a></li>

                        <li className='cursor-pointer hover:text-[tomato] transition'><Link to='/privacy'>Privacy policy</Link></li>
                    </ul>
                </div>
                <div className="footer-content-right flex flex-col items-start gap-5">
                    <h2 className='text-white text-2xl font-bold'>GET IN TOUCH</h2>
                    <ul className='list-none space-y-2.5'>
                        <li className='cursor-pointer hover:text-[tomato] transition'>+1-212-456-7890</li>
                        <li className='cursor-pointer hover:text-[tomato] transition'>contact@yumgo.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-[2px] my-5 bg-gray-500 border-none' />
            <p className="footer-copyright">Copyright 2026 © YumGo.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
