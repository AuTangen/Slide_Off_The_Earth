import { NavLink, useNavigate } from 'react-router-dom';

function Vendors(props) {
    // const navigate = useNavigate();

    return (
        <>
            
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>
            <h2>VENDORS</h2>

            {props.user && (<button id='add-vendor'>Add Vendor</button>)}

            <div class='vendors-container'>
                <div>Tijuana Flatts</div>
            </div>

        </>
    )

};

export default Vendors;