import { NavLink, useNavigate } from 'react-router-dom';

import { SocialIcon } from 'react-social-icons';

function Footer(props) {
    // const navigate = useNavigate();

    return (
        <footer>
            
            <p>&copy; 2023 SlideOffTheEarth</p>

            <nav>
                <SocialIcon url='http://facebook.com' />
                <SocialIcon url='https://twitter.com/' />
                <SocialIcon url='https://instagram.com' />
                <SocialIcon url='https://tiktok.com' />
            </nav>

        </footer>
    )

};

export default Footer;