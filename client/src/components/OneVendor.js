import { NavLink, useNavigate } from 'react-router-dom';

function OneVendor(props) {
    // const navigate = useNavigate();

    return (
        <>
            
            <div class='one-vendor-container'>
                <h3>Vendor Name</h3>
                <p>Vendor Category</p>
            </div>

            <div class='edit-delete-vendor-container'>
                <button id='edit-vendor'>Edit</button>
                <button id='delete-vendor'>Delete</button>
            </div>

        </>
    )

};

export default OneVendor;