import { NavLink, useNavigate } from 'react-router-dom';

import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer(props) {
    // const navigate = useNavigate();

    return (
    <footer className="footer-wrap">
            
        <div className="footer">
            <p className="copyright">&copy; 2023 SlideOffTheEarth</p>

            <div className="footer-nav">
                <ul className="footer-ul">
                    <li><a className="socials" href="https://facebook.com" target="_blank" without rel="noreferrer"><AiOutlineFacebook size={30} /></a></li>
                <li><a className="socials" href="https://twitter.com/slideoffthefest" target="_blank" without rel="noreferrer"><AiOutlineTwitter size={30} /></a></li>
                <li><a className="socials" href="https://instagram.com" target="_blank" without rel="noreferrer"><AiOutlineInstagram size={30} /></a></li>
                <li><a className="socials" href="https://tiktok.com" target="_blank" without rel="noreferrer"><FaTiktok size={30} /></a></li>
                </ul>
            </div>
            </div>

        </footer>
    )

};

export default Footer;