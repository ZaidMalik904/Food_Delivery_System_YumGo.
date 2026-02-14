import React, { useState, useEffect, useContext } from 'react'
import { ChevronUp } from 'lucide-react'
import { StoreContext } from '../context/StoreContext'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { setMenu } = useContext(StoreContext);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setMenu("home");
    };

    return (
        <div className={`fixed bottom-10 right-8 z-[100] transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className='bg-[tomato] text-white p-3 rounded-full shadow-2xl hover:bg-[#e45b41] active:scale-90 transition duration-300 flex items-center justify-center cursor-pointer group'
                aria-label="Scroll to top"
            >
                <ChevronUp size={28} className='group-hover:-translate-y-1 transition-transform duration-300' />
            </button>
        </div>
    )
}

export default ScrollToTop
