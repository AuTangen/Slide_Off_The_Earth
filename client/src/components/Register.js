import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";


function Register(props) {

    console.log(props)
    const [formState, setFormState] = useState({
        username: '',
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

    const submitRegister = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        try {
            const res = await axios.post('/auth/register', formState);
            props.setUser(res.data.user)
            console.log(res.data.user)
        } catch (err) {
            if (err.code === 402) {
                console.log()
            }
        }
    }



    return (
        <div class='add-artist-container'>
                <div className="section-title"><h2>Register</h2></div>

        <form onSubmit={submitRegister}>
        <div className="form-container">
            <div className="col-span-full mt-2">
                <label for="username">Username</label>
                <div className="mt-2">
            <input name='username' className="form-element" value={formState.username} onChange={handleChange} type="text" placeholder="Create your username"></input>
            </div>
            </div>
            <div className="col-span-full mt-2">
                <label for="email">Email</label>
                <div className="mt-2">
            <input name='email' className="form-element" value={formState.email} onChange={handleChange} type="email" placeholder="Enter your email"></input>
            </div>
            </div>
            <div className="col-span-full mt-2">
                <label for="password">Password</label>
                <div className="mt-2">
            <input name='password' className="form-element" value={formState.password} onChange={handleChange} type="password" placeholder="Enter your password"></input>
            </div>
            </div>
            <div className="col-span-full mt-2">
            <button className="submit-btn">Register Account</button>
            </div>
            </div>
        </form>
        </div>

    )

};

export default Register;