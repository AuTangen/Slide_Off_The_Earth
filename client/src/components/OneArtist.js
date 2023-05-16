import { NavLink, useNavigate } from 'react-router-dom';

function OneArtist(props) {
    // const navigate = useNavigate();

    return (
        <>

            <div class='one-artist-container'>
                <h3>Artist Name</h3>
                <p>Band Members</p>
                <p>Stage</p>
                <p>Date</p>
                <p>Time</p>
                <p>Set List</p>
            </div>

            <div class='edit-delete-artist-container'>
                <button id='edit-artist'>Edit</button>
                <button id='delete-artist'>Delete</button>
            </div>

        </>
    )

};

export default OneArtist;