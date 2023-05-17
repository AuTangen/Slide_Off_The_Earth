import { NavLink, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
        
    }

    const outputArtists = (artists) => {
        return (
            <div key={artists._id} className="artists">
                <NavLink to='/artist'>View Band</NavLink>
                <h4>{artists.name}</h4>
                <p>Members: {artists.artists}</p>
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
        );
    }
    return (
        <>
            


            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>
            <h2>ARTISTS</h2>



            <h2>ARTISTS</h2>
            <section className='artist-container'>
                {artists.map(outputArtists)}
            </section>

       


            {/* checks if user is an admin and allows them to get to /addartist (not finished) */}
            {/* {props.user.isAdmin && (<button id='add-band'>Add Band</button>)} */}

        </>
    )

};

export default Artists;