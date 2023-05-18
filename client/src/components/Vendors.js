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
                <button onClick={() => deleteVendor(vendors._id)}>Delete</button>
            </div>
        );
    }

    const deleteVendor = async (vendorID) => {
       
        try{
            const res = await axios.delete(`/api/vendor/${vendorID}`)
            console.log('deleted')
            console.log(res.data)
            setVendors(res.data.vendors);
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
        
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