import { NavLink, useNavigate } from 'react-router-dom';

function AddArtist(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='add-artist-container'>

            <h2>Add Artist</h2>

                <form>

                    <input type='text' placeholder='Artist Name'></input>

                    <input type='text' placeholder='Band Members'></input>

                    <label for="stage">Select a Stage:</label> 
                        <select name="stages" id="stages"> 
                            <option value="stageA">Stage A</option> 
                            <option value="stageB">Stage B</option> 
                            <option value="stageC">Stage C</option> 
                        </select>
                    
                    <label for="date" >Select a Date</label>
                    <input type="date"></input>

                    <label for="time">Select a time</label>
                    <input type="time" id="time" name="time"></input>

                    <textarea placeholder='Set List'></textarea>

                    <button type='submit'>Submit</button>

                </form>
            </div>
        </>
    )

};

export default AddArtist;

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