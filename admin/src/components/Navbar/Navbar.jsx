import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { PlusCircle, ListOrdered, Package, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={assets.logo} alt='logo' />
        <p>Admin Panel</p>
      </div>

      <div className='nav-right'>
        {/* Desktop Menu */}
        <div className="navbar-menu">
          <NavLink to="/add" className="nav-item">
            <PlusCircle size={18} />
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="nav-item">
            <ListOrdered size={18} />
            <p>List Items</p>
          </NavLink>
          <NavLink to="/orders" className="nav-item">
            <Package size={18} />
            <p>Orders</p>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-dropdown animate-slideDown">
          <NavLink to="/add" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
            Add Items
          </NavLink>
          <NavLink to="/list" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
            List Items
          </NavLink>
          <NavLink to="/orders" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
            Orders
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
