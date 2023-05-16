import { NavLink, useNavigate } from 'react-router-dom';

function AddArtist(props) {
    // const navigate = useNavigate();

    return (
        <>
            <div class='add-artist-container'>

            <p className="add-artist">Add Artist</p>

                <form className="flex flex-col mb-auto mt-4 justify-center align-middle">
                <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4">
                    <div className="col-span-full">
                    <label for="artistName">Artist Name</label>
                    <div className='mt-2'>
                    <input className="form-element" type='text' placeholder='Artist Name'></input>
                        </div>
                    </div>
                    
                    <div className="col-span-full">
                    <label for="bandMembers">Band Members</label>
                    <div className='mt-2'>
                    <input className="form-element" type='text' placeholder='Band Members'></input>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label for="stage">Select a Stage:</label> 
                    <div className='mt-2'>
                        <select className="form-element" name="stages" id="stages"> 
                            <option value="stageA">Main Stage</option> 
                            <option value="stageB">Almost Famous Stage</option> 
                            <option value="stageC">Noob Stage</option> 
                        </select>
                        </div>
                        </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                    <label className="block leading-6" for="date" >Select a Date</label>
                        <div className='mt-2'>
                    <input className="form-element block w-full" type="date"></input>
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label className="block leading-6" for="time">Select a time</label>
                        <div className='mt-2'>
                    <input className="form-element block w-full" type="time" id="time" name="time"></input>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <textarea className="form-element my-4" placeholder='Set List'></textarea>
                    </div>

                    <div className="col-span-full">
                    <button className="block w-full rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#088395] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4D68]" type='submit'>Submit</button>
                    </div>
                    </div>
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