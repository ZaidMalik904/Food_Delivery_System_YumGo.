import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { ShoppingCart, LogOut, User, Menu, X } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {

    const { getTotalCartAmount, token, setToken, menu, setMenu } = useContext(StoreContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="navbar sticky top-0 z-50 bg-white flex justify-between items-center py-5 px-[5vw] shadow-sm">
            <Link to='/'><img src='logo.svg' alt="YumGo." className="w-[120px] md:w-[150px]" /></Link>

            {/* Desktop Menu */}
            <ul className="navbar-menu hidden md:flex items-center gap-8 list-none">
                <a href='/#home' onClick={() => setMenu("home")} className={`flex items-center gap-2 text-[#555] text-[15px] font-medium py-2 px-4 rounded-[20px] transition-all duration-300 hover:bg-[#f8f8f8] hover:text-[tomato] no-underline ${menu === "home" ? "bg-[#fff0ed] text-[tomato] font-semibold shadow-[0_2px_8px_rgba(255,67,67,0.15)]" : ""}`}>Home</a>
                <a href='/#explore-menu' onClick={() => setMenu("menu")} className={`flex items-center gap-2 text-[#555] text-[15px] font-medium py-2 px-4 rounded-[20px] transition-all duration-300 hover:bg-[#f8f8f8] hover:text-[tomato] no-underline ${menu === "menu" ? "bg-[#fff0ed] text-[tomato] font-semibold shadow-[0_2px_8px_rgba(255,67,67,0.15)]" : ""}`}>Menu</a>
                <a href='/#about-us' onClick={() => setMenu("about-us")} className={`flex items-center gap-2 text-[#555] text-[15px] font-medium py-2 px-4 rounded-[20px] transition-all duration-300 hover:bg-[#f8f8f8] hover:text-[tomato] no-underline ${menu === "about-us" ? "bg-[#fff0ed] text-[tomato] font-semibold shadow-[0_2px_8px_rgba(255,67,67,0.15)]" : ""}`}>About Us</a>
                <a href='/#footer' onClick={() => setMenu("contact-us")} className={`flex items-center gap-2 text-[#555] text-[15px] font-medium py-2 px-4 rounded-[20px] transition-all duration-300 hover:bg-[#f8f8f8] hover:text-[tomato] no-underline ${menu === "contact-us" ? "bg-[#fff0ed] text-[tomato] font-semibold shadow-[0_2px_8px_rgba(255,67,67,0.15)]" : ""}`}>Contact Us</a>
            </ul>

            <div className="navbar-right flex items-center gap-4 md:gap-10">
                <div className="navbar-search-icon relative">
                    <Link to='/cart'><ShoppingCart className='w-6 h-6 md:w-7 md:h-7 text-black' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-full top-[-8px] right-[-8px]"}></div>
                </div>
                {!token ?
                    <button onClick={() => setShowLogin(true)} className='hidden md:block bg-transparent text-[18px] text-black font-bold border border-[tomato] py-2.5 px-7 rounded-[50px] hover:bg-[#fff4f2] transition duration-300'>Sign In</button>
                    : <div className='hidden md:block navbar-profile relative group'>
                        <User className='w-7 h-7 text-[tomato] cursor-pointer' />
                        <ul className='nav-profile-dropdown absolute hidden right-0 z-10 group-hover:flex flex-col gap-2.5 bg-[#fff2ef] py-3 px-6 rounded border border-[tomato] outline-2 outline-white list-none min-w-[140px]'>
                            <li onClick={() => navigate('/my-orders')} className='flex items-center gap-2.5 cursor-pointer hover:text-[tomato]'><ShoppingCart className='w-5 h-5' /><p>Orders</p></li>
                            <hr className='h-[1px] w-full bg-[#e2e2e2] border-none' />
                            <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-[tomato]'><LogOut className='w-5 h-5' /><p>LogOut</p></li>
                        </ul>
                    </div>
                }

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-black focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white shadow-lg flex flex-col items-center gap-8 py-10 md:hidden animate-slideDown z-50 border-t border-gray-100 overflow-y-auto">
                    <a href='/#home' onClick={() => { setMenu("home"); setIsMenuOpen(false); }} className={menu === "home" ? "text-[tomato] font-bold text-2xl" : "text-black font-medium text-2xl hover:text-[tomato]"}>Home</a>
                    <a href='/#explore-menu' onClick={() => { setMenu("menu"); setIsMenuOpen(false); }} className={menu === "menu" ? "text-[tomato] font-bold text-2xl" : "text-black font-medium text-2xl hover:text-[tomato]"}>Menu</a>
                    <a href='/#about-us' onClick={() => { setMenu("about-us"); setIsMenuOpen(false); }} className={menu === "about-us" ? "text-[tomato] font-bold text-2xl" : "text-black font-medium text-2xl hover:text-[tomato]"}>About Us</a>
                    <a href='/#footer' onClick={() => { setMenu("contact-us"); setIsMenuOpen(false); }} className={menu === "contact-us" ? "text-[tomato] font-bold text-2xl" : "text-black font-medium text-2xl hover:text-[tomato]"}>Contact Us</a>

                    {!token ? (
                        <button onClick={() => { setShowLogin(true); setIsMenuOpen(false); }} className='bg-[tomato] text-white text-xl font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#e45b41] transition w-[85%] active:scale-95'>Sign In</button>
                    ) : (
                        <div className='flex flex-col items-center gap-6 w-full'>
                            <button onClick={() => { navigate('/my-orders'); setIsMenuOpen(false); }} className='flex items-center gap-3 text-black font-bold text-xl hover:text-[tomato]'><ShoppingCart className='w-6 h-6' /> Orders</button>
                            <button onClick={() => { logout(); setIsMenuOpen(false); }} className='flex items-center gap-3 text-black font-bold text-xl hover:text-[tomato]'><LogOut className='w-6 h-6' /> Logout</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Navbar
