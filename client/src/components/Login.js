import { NavLink, useNavigate } from 'react-router-dom';

function Login(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='login-container'>

            <h2>Login</h2>

                <form>

                    <input type='text' placeholder='Email Address'></input>

                    <input type='text' placeholder='Password'></input>

                    <button type='submit'>Login</button>

                </form>
            </div>
        </>
    )

};

export default Login;