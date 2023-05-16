import { NavLink, useNavigate } from 'react-router-dom';

function Login(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='register-container'>

            <h2>Register</h2>

                <form>

                    <input type='text' placeholder='Email Address'></input>

                    <input type='text' placeholder='Password'></input>

                    <button type='submit'>Register</button>

                </form>
            </div>
        </>
    )

};

export default Login;