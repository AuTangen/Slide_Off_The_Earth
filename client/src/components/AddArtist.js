import { NavLink, useNavigate } from 'react-router-dom';

function AddArtist(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='add-artist-container'>

            <h2>Add Artist</h2>

                <form>

                    <input type='text' placeholder='Artist Name'></input>

                    <input type='text' placeholder='Band Members'></input>

                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <button type='submit'>Register</button>

                </form>
            </div>
        </>
    )

};

export default AddArtist;
