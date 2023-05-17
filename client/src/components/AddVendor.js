import { NavLink, useNavigate } from 'react-router-dom';

function AddVendor(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='add-artist-container'>

            <h2 className="section-title">Add Vendor</h2>

                <form>
                    <div className="form-container">
                        <div className="col-span-full">
                            <label for="name">Vendor Name:</label>
                            <div className="mt-2">
                                <input className="form-element" type='text' placeholder='Vendor Name'></input>
                            </div>
                        </div>
                        
                        <div className="col-span-full">
                            <label for="category">Select a Category:</label>
                            <div className="mt-2"> 
                                <select className="form-element" name="category" id="category"> 
                                <option value="food">Food</option> 
                                <option value="merch">Merchandise</option> 
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label for="lot-size">Select Lot Size:</label>
                            <div className="mt-2">
                                <select className="form-element" name="lot-size" id="lot-size">
                                    <option value="table">Table</option>
                                    <option value="walk-in">Walk-in Booth</option>
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