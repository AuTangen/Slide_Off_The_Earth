import { NavLink, useNavigate } from 'react-router-dom';

function Artists(props) {
    // const navigate = useNavigate();

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
            
            {props.user && (<button id='add-band'>Add Band</button>)}
            <div class='artist-container'>
                <div>Band 1</div>
            </div>

        </>
    )

};

export default Artists;