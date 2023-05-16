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

        <form onSubmit={submitRegister}>

            <h1>Register</h1>
            <input name='username' value={formState.username} onChange={handleChange} type="text" placeholder="Create your username"></input>
            <input name='email' value={formState.email} onChange={handleChange} type="email" placeholder="Enter your email"></input>
            <input name='password' value={formState.password} onChange={handleChange} type="password" placeholder="Enter your password"></input>
            <button>Register Account</button>
        </form>

    )

};

export default Register;