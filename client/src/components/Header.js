import { NavLink, useNavigate } from 'react-router-dom';

function Header(props) {
    // const navigate = useNavigate();

    return (
        <header>
            
            <h1>IMAGE</h1>

            <nav>
               <p>Welcome!</p>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/artists'>Artists</NavLink>
               <NavLink to='/stages'>Stages</NavLink>
               <NavLink to='/vendors'>Vendors</NavLink>
               <NavLink to='/news'>News</NavLink>
               <NavLink to='./faq'>FAQ</NavLink>
               <NavLink to='./login'>Login</NavLink>
            </nav>

        </header>
    )

};

export default Header;