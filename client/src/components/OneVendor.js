import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsXSquareFill } from "react-icons/bs";

function OneVendor(props) {
    const [showForm, setShowForm] = useState(false);

    const updateForm = () => {
        setShowForm(!showForm);
      }

    const navigate = useNavigate();
    const {id} = useParams();
    
    const [vendor, setVendor] = useState({});

    useEffect(() => {
        
        axios.get(`/api/vendors/${id}`)
            .then(res => {
                console.log('res', res.data)
                setVendor(res.data);
            });
    }, []);

    const deleteVendor = async (vendorID) => {
       
        try{
            const res = await axios.delete(`/api/vendor/${vendorID}`)
            console.log('deleted')
            console.log(res.data)
            setVendor({});
            navigate('/vendors')
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
        
    }

    const OutputVendor = ({vendor}) => {
        console.log('vendor', vendor)
        
        return (
            <div key={vendor._id} className="vendors">
                
                <h4>{vendor.name}</h4>
                <p>Category: {vendor.category}</p>
                <p>Lot Size: {vendor.lotSize}</p>
                <div className='btn-div'>
                    <button onClick={updateForm}>Update</button> 
                   <button onClick={() =>   deleteVendor(vendor._id)}>Delete</button>
                </div>
                
            </div>
        );
    }

    const [formState, setFormState] = useState({
        name: '',
        category: '',
        lotSize: ''
    })

    const handleChange = (event) => {
        const prop = event.target.name
        setFormState({
            ...formState,
            [prop]: event.target.value
        });
    }

    const updateVendor = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        console.log(formState)
        try {
            const res = await axios.put(`/api/vendor/${id}`, formState);
    
            // props.setUser(res.data.user);
    
            setFormState({
                name: '',
                category: '',
                lotSize: ''
            })
            setVendor(res.data.vendors);
    
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
    }

    return (
        <>
            
            <section className='vendor-container'>
                <OutputVendor vendor={vendor} />
            </section>

           {showForm && (

<div class='add-artist-container'>

<h2 className="section-title">Update Vendor</h2>

    <form className='update-form' onSubmit={updateVendor}>
        <div className="form-container update form">

        <BsXSquareFill onClick={updateForm}/>

            <div className="col-span-full">
                <label for="name">Vendor Name:</label>
                <div className="mt-2">

                    <input name='name' value={formState.name} onChange={handleChange} className='form-element' type='text' placeholder={`${vendor.name}`}></input>

                </div>
            </div>
            
            <div className="col-span-full">
                {/* <label for="category">Select a Category:</label> */}
                <div className="mt-2"> 

                    <select name="category" className='form-element' value={formState.category} onChange={handleChange} id="category"> 
                    <option value=''>Select a Category</option>
                    <option value="Food">Food</option> 
                    <option value="Merchandise">Merchandise</option> 

                    </select>
                </div>
            </div>

            <div className="col-span-full">
                {/* <label for="lotSize">Select Lot Size:</label> */}
                <div className="mt-2">

                    <select name="lotSize" className='form-element' value={formState.lotSize} onChange={handleChange} id="lotSize">
                        <option value=''>Select a Lot Size</option>
                        <option value="Table">Table</option>
                        <option value="Booth">Walk-in Booth</option>


                    </select>
                </div>
            </div>

            <div className="col-span-full pt-4">
        
        <button className="submit-btn" type='submit'>Submit</button>

        </div>
        </div>

    </form>
</div>

           )}

        </>
    )

};

export default OneVendor;