import { NavLink, useNavigate } from 'react-router-dom';

function AddVendor(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='add-artist-container'>

            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>
            <h2>Add Vendor</h2>

                <form>

                    <input type='text' placeholder='Vendor Name'></input>

                    <label for="category">Select a Category:</label> 
                        <select name="category" id="category"> 
                            <option value="food">Food</option> 
                            <option value="merch">Merchandise</option> 
                        </select>
                    
                    <button type='submit'>Submit</button>

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