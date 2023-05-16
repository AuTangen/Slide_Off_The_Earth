import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import SOTE from '../assets/sote.png';

function Header(props) {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    const { toggleView } = props

    return (
        <header className="header">
          <a href="/">
            <img src={SOTE} alt="Slide Off The Earth Logo" className="logo" />
            </a>

          


            {/* Desktop Nav */}
            <ul className="hidden md:flex">
               <li>Welcome (username)!</li>
               <li>
                <NavLink to='/'>Home</NavLink>
               </li>
               
               <li>
                <NavLink to='/artists'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >Artists</NavLink>
               </li>
               
               <li>
                <NavLink to='/stages'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >Stages</NavLink>
               </li>

               <li>
                <NavLink to='/vendors'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >Vendors</NavLink>
               </li>

               <li>
                <NavLink to='/news'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >News</NavLink>
               </li>

               <li>
                <NavLink to='/faq'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >Faq</NavLink>
               </li>

               <li>
                <NavLink to='/login'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >Login</NavLink>
               </li>

            </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-20 mt-4 text-white'>
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