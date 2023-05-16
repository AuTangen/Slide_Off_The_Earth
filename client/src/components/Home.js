import { NavLink, useNavigate } from 'react-router-dom';

function Home(props) {
    // const navigate = useNavigate();

    return (
        <>
            {props.user && <h1>Welcome {props.user.username}</h1>}
            <h2>HOME PAGE</h2>

        </>
    )

};

export default Home;