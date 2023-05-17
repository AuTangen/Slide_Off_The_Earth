import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Vendors(props) {
    // const navigate = useNavigate();

    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        axios.get('/api/vendors')
            .then(res => {
                setVendors(res.data);
            });
    }, []);

    const outputVendors = (vendors) => {
        return (
            <div key={vendors._id} className="vendors">
                <h4>{vendors.name}</h4>
                <p>Category: {vendors.category}</p>
                <p>Lot Size: {vendors.lotSize}</p>
            </div>
        );
    }

    return (
        <>

            <h2>VENDORS</h2>

            <section className='vendor-section'>
                {vendors.map(outputVendors)}
            </section>

            {props.user && (
                <NavLink to='/addvendor'>
                    <button 
                        id='add-vendor'>
                        Add Vendor
                    </button>
                </NavLink>
            )
            }

        </>
    )

};

export default Vendors;