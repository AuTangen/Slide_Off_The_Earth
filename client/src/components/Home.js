import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';

function Home() {
    // const navigate = useNavigate();
    const artists = useState([]);


    const outputArtists = (artists) => {
        return (
            <div key={artists._id} className="artists">
                <img src={bando} alt="the band" className="w-full" />
                <div className="artist-info">
                <h4>{artists.name}</h4>
                <p>Members: {artists.artists}</p>
                <p>Stage: {artists.stage}</p>
                <p>Day: {artists.day}</p>
                <p>Time: {artists.time}</p>
                <p>Set List: {artists.setlist}</p>
            </div>
            </div>
        );
    }

    return (
        <>
           <section className="artist-container">

            <h2>ARTISTS</h2>
            <section className='artist-section'>
                {artists.map(outputArtists)}
            </section>

        </section >
        </>
    )

};

export default Home;