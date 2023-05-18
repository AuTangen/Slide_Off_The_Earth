import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';

function Home({user, setUser}) {
    // const navigate = useNavigate();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('/api/artists')
            .then(res => {
                setArtists(res.data);
            });
    }, []);



    const outputArtists = (artists) => {
        return (
            <div key={artists._id} className="artists">
                <img src={bando} alt="the band" className="w-full" />
                <div className="artist-info">
                <h4>{artists.name}</h4>
                <p>Stage: {artists.stage}</p>
                <p>Day: {artists.day}</p>
                <p>Time: {artists.time}</p>
            </div>
            </div>
        );
    }

    return (
        <>
           <section className="artist-container">

            <h2 className="section-title">Welcome!</h2>
            
            <NavLink to='/artists'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                >
                    <button className='add-artist-btn'>View All Artists</button>
                </NavLink>

            <section className='artist-section-home'>
                {artists.map(outputArtists)}
            </section>

        </section >
        </>
    )

};

export default Home;