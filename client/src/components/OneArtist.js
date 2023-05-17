import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function OneArtist(props) {
    
    // const navigate = useNavigate();
    const {id} = useParams();
    
    const [artist, setArtist] = useState({});

    useEffect(() => {
        
        axios.get(`/api/artists/${id}`)
            .then(res => {
                console.log('res', res.data)
                setArtist(res.data);
            });
    }, []);

    const OutputArtist = (artist) => {
        console.log('artist', artist)
        console.log(artist.artist.name)
        return (
            <div key={artist.artist._id} className="artists">
                
                <h4>{artist.artist.name}</h4>
                <p>Members: {artist.artist.artists}</p>
                <p>Stage: {artist.artist.stage}</p>
                <p>Day: {artist.artist.day}</p>
                <p>Time: {artist.artist.time}</p>
                <p>Set List: {artist.artist.setlist}</p>
                {/* {props.user && (
              drink.favorited ? <button disabled>Favorited</button> :
                <button onClick={() => saveFavorite(drink._id)}>Favorite This Drink</button>
            )} */}
            </div>
        );
    }

    

    return (
        <>



            <div class='edit-delete-artist-container'>
                <button id='edit-artist'>Edit</button>
                <button id='delete-artist'>Delete</button>
            </div>


            <section className='artist-container'>
                {/* {OutputArtist} */}
                <OutputArtist hello="paul" artist={artist} />
            </section>


        </>
    )

};

export default OneArtist;