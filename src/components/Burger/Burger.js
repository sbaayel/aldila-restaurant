import React from 'react';
import HamburgerMenu from '../../Images/menu-icon.svg';
import './Burger.css'

const Burger = ({ open, setOpen }) => {
  return (
    // <button className="nav-toggle" open={open} onClick={() => setOpen(!open)}>
    <img className="nav-toggle" open={open} onClick={() => setOpen(!open)} src={HamburgerMenu} />
    // </button>
  );
}

export default Burger;