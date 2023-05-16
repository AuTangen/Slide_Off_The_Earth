import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import SOTE from '../assets/sote.png';

function Header(props) {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-secondary text-white">
          <a href="/" className="logo">
            <img src={SOTE} alt="Slide Off The Earth Logo" className="flex py-0 px-2 w-[300px]" />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex">
               <li>Welcome (username)!</li>
               <li>
                <NavLink to='/'>Home</NavLink>
               </li>
               <li>
                <NavLink to='/artists'>Artists</NavLink>
               </li>
               <li>
                <NavLink to='/stages'>Stages</NavLink>
               </li>
               <li>
                <NavLink to='/vendors'>Vendors</NavLink>
               </li>
               <li>
                <NavLink to='/news'>News</NavLink>
               </li>
               <li>
                <NavLink to='./faq'>FAQ</NavLink>
               </li>
               <li>
                <NavLink to='./login'>Login</NavLink>
               </li>
            </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-20 mt-4'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-accent text-accent flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            Welcome, (username)!
          </li>
          <li className='py-6 text-4xl'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='py-6 text-4xl'>
            <NavLink to='/artists'>Artists</NavLink>
          </li>
          <li className='py-6 text-4xl'>
            <NavLink to='/stages'>Stages</NavLink>
          </li>
          <li className='py-6 text-4xl'>
            <NavLink to='/vendors'>Vendors</NavLink>
          </li>
          <li className='py-6 text-4xl'>
            <NavLink to='/news'>News</NavLink>
          </li>
          <li className='py-6 text-4xl'>
          <NavLink to='./faq'>FAQ</NavLink>
          </li>
          <li className='py-6 text-4xl'>
          <NavLink to='./login'>Login</NavLink>
          </li>
        </ul>

        </header>
    )

};

export default Header;