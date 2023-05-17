import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function OneVendor(props) {
    // const navigate = useNavigate();

    const {id} = useParams();
    
    const [vendor, setVendor] = useState({});

    useEffect(() => {
        
        axios.get(`/api/vendors/${id}`)
            .then(res => {
                console.log('res', res.data)
                setVendor(res.data);
            });
    }, []);

    const OutputVendor = (props) => {
        console.log('vendor', vendor)
        console.log(props.vendor.name)
        return (
            <div key={props.vendor._id} className="vendors">
                
                <h4>{props.vendor.name}</h4>
                <p>Category: {props.vendor.category}</p>
                <p>Lot Size: {props.vendor.lotSize}</p>
            </div>
        );
    }

    return (
        <>
            
            <section className='vendor-container'>
                <OutputVendor vendor={vendor} />
            </section>

            <div class='edit-delete-vendor-container'>
                <button id='edit-vendor'>Edit</button>
                <button id='delete-vendor'>Delete</button>
            </div>

        </>
    )

};

export default OneVendor;