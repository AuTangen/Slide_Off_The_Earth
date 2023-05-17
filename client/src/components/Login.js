import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";


function Login(props) {
    // const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const prop = event.target.name
        setFormState({
            ...formState,
            [prop]: event.target.value
        });
    }

    const submitLogin = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        try {
            const res = await axios.post('/auth/login', formState);
            props.setUser(res.data.user)
            console.log(res.data.user)
        } catch (err) {
            if (err.code === 402) {
                console.log()
            }
        }
    }



    return (
        <>
            <div class='add-artist-container'>
                <div className="section-title"><h2>Login</h2></div>
                <NavLink to='/register'><p className="text-center hover:text-gray-300">No account? Click hear to register</p></NavLink>
                <form onSubmit={submitLogin}>
                    <div className="form-container">
                        <div className="col-span-full mt-2">
                            <label for="email">Email</label>
                            <div className="mt-1">
                                <input name="email" className="form-element" value={formState.email} onChange={handleChange} type="email" placeholder="Enter your email"></input>
                            </div>
                        </div>
                        <div className="col-span-full mt-2">
                            <label for="password">Password</label>
                            <div className="mt-1">
                            <input name="password" className="form-element" value={formState.password} onChange={handleChange} type="password" placeholder="Enter your password"></input>
                        </div>
                    </div>
                    <div className="col-span-full mt-4">
                        <button className="submit-btn" type="submit">Login</button>
                    </div>
                    </div>
                </form>
            </div >
        </>
    )
};


export default Login;