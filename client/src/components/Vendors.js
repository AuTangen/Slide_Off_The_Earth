import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';

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
            <div key={vendors._id} className="artists">
                
                <NavLink to={`/vendor/${vendors._id}`}><img src={bando} alt="the band" className="w-full zoom" /></NavLink>

                <div className="artist-info">

                <NavLink to={`/vendor/${vendors._id}`}> <h4>{vendors.name}</h4> </NavLink>
                <p>Category: {vendors.category}</p>
                <p>Lot Size: {vendors.lotSize}</p>
                
                </div>

            </div>
        );
    }

    return (
        <>

        <section className='artist-container'>

            <h2 className="section-title" >VENDORS</h2>

            <div className='artist-section'>
                {vendors.map(outputVendors)}
            </div>

            {props.user && (
                <NavLink to='/addvendor'>
                    <button 
                        className="add-artist-btn"
                        id='add-vendor'>
                        Add Vendor
                    </button>
                </NavLink>
                )
            }

        </section>

        </>
    )

};

export default Vendors;