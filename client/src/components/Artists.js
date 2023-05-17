import { NavLink, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';

function Artists(props) {
    // const navigate = useNavigate();

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('/api/artists')
            .then(res => {
                setArtists(res.data);
            });
    }, []);

    const deleteArtist = async (artistID) => {
       
        try{
            const res = await axios.delete(`/api/artist/${artistID}`)
            console.log('deleted')
            console.log(res.data)

            setArtists(res.data.artists)

        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
        
    }

    const outputArtists = (artists) => {
        return (
            <div key={artists._id} className="artists">

                <NavLink to='/artist/${artists._id}'><img src={bando} alt="the band" className="w-full" /></NavLink>

                
                <div className="artist-info">

                <NavLink to='/artist/${artists._id}'><h4>{artists.name}</h4></NavLink>
                {/* <p>Members: {artists.artists}</p> */}
                <p>Stage: {artists.stage}</p>
                <p>Day: {artists.day}</p>
                <p>Time: {artists.time}</p>
                <p>Set List: {artists.setlist}</p>
                <button onClick={() => deleteArtist(artists._id)}>Delete</button>
                {/* {props.user && (
              drink.favorited ? <button disabled>Favorited</button> :
                <button onClick={() => saveFavorite(drink._id)}>Favorite This Drink</button>
            )} */}
            </div>
            </div>
        );
    }
    return (
        <>

            <section className="artist-container">

            <h2 className="section-title">ARTISTS</h2>
            {props.user && (
                <NavLink to="/addartist">
                    <button 
                        className="add-artist-btn" 
                        id='add-band'>
                            Add Artist
                    </button>
                </NavLink>)}
                <div className="artist-section">
                {artists.map(outputArtists)}
                </div>

            {/* <div class='artist-container'>
                <div>Band 1</div>
            </div> */}

            </section>

        </>
    )

};

export default Artists;