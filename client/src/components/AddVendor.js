import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

function AddVendor(props) {
    // const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        category: '',
        lotSize: '',
    })

    const handleChange = (event) => {
        const prop = event.target.name
        setFormState({
            ...formState,
            [prop]: event.target.value
        });
    }

    const createVendor = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        console.log(formState)
        try {
            const res = await axios.post('/api/vendor', formState);

            setFormState({
                name: '',
                category: '',
                lotSize: '',
            })
    
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <div class='add-artist-container'>

            <h2 className="section-title">Add Vendor</h2>

                <form onSubmit={createVendor}>
                    <div className="form-container">
                        <div className="col-span-full">
                            <label for="name">Vendor Name:</label>
                            <div className="mt-2">

                                <input name='name' value={formState.name} onChange={handleChange} className='form-element' type='text' placeholder='Vendor Name'></input>

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
        </>
    )

};

export default AddVendor;

// {props.admin && ( 
// <form onSubmit={createDrink}>
// <h2>Add a Drink</h2>
// {errMessage && <p>{errMessage}</p>}
// <input name='name' value={formState.name} onChange={handleChange} type="text" placeholder="Enter the name of your drink"></input>
// <input name='category' value={formState.category} onChange={handleChange} type="text" placeholder="Enter a category"></input>
// <input name='ingredients' value={formState.ingredients} onChange={handleChange} type="text" placeholder="Enter the ingredients"></input>
// <textarea name='instructions' value={formState.instructions} onChange={handleChange} type="text" placeholder="Instructions"></textarea>
// <button>Save Drink</button>
// </form>
// )}