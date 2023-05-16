import { NavLink, useNavigate } from 'react-router-dom';

import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer(props) {
    // const navigate = useNavigate();

    return (
    <footer className="footer-wrap">
            
        <div className="footer">
            <p className="copyright">&copy; 2023 SlideOffTheEarth</p>

            <nav className="footer-nav">
                <ul className="footer-ul">
                    <li><AiOutlineFacebook className="socials" size={30} url='http://facebook.com' /></li>
                <li><AiOutlineTwitter className="socials" size={30} url='https://twitter.com/' /></li>
                <li><AiOutlineInstagram className="socials" size={30} url='https://instagram.com' /></li>
                <li><FaTiktok className="socials" size={30} url='https://tiktok.com' /></li>
                </ul>
            </nav>
            </div>

        </footer>
    )

};

export default Footer;