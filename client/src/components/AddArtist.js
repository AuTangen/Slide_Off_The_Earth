import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";


function AddArtist(props) {
    // const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        artists: '',
        stage: '',
        day: '',
        time: '',
        setlist: ''
    })
    
    const handleChange = (event) => {
        const prop = event.target.name
        setFormState({
            ...formState,
            [prop]: event.target.value
        });
    }
    
    const createBand = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        console.log(formState)
        try {
            const res = await axios.post('/api/artist', formState);
    
            // props.setUser(res.data.user);
    
            setFormState({
                name: '',
                artists: '',
                stage: '',
                day: '',
                time: '',
                setlist: ''
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


            <p className="add-artist">Add Artist</p>
      
            <h2>Add Artist</h2>

                <form onSubmit={createBand}>
                <div class="form-container">
                    <div className="col-span-full">
                    <label for="name">Artist Name</label>
                    <div className='mt-2'>
                    <input name='name' value={formState.name} onChange={handleChange} className="form-element" type='text' placeholder='Artist Name'></input>
                        </div>            
                    </div>
                    
                    <div className="col-span-full">
                    <label for="artists" >Band Members</label>
                    <div className='mt-2'>
                    <input name='artists' value={formState.artists} onChange={handleChange} className="form-element" type='text' placeholder='Band Members'></input>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label for="stage">Select a Stage:</label> 
                    <div className='mt-2'>
                        <select  name='stage' value={formState.stage} onChange={handleChange} className="form-element" id="stages"> 
                            <option value="">Select a Stage</option> 
                            <option value="Main Stage">Main Stage</option> 
                            <option value="Almost Famous Stage">Almost Famous Stage</option> 
                            <option value="Noob Stage">Noob Stage</option> 
                        </select>
                        </div>
                        </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                    <label className="block leading-6" for="date" >Select a Date</label>
                        <div className='mt-2'>
                    <input name='day' value={formState.day} onChange={handleChange} className="form-element block w-full" type="date"></input>
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label className="block leading-6" for="time">Select a time</label>
                        <div className='mt-2'>
                    <input name='time' value={formState.time} onChange={handleChange} className="form-element block w-full" type="time" id="time"></input>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <textarea name='setlist' value={formState.setlist} onChange={handleChange} className="form-element my-4" placeholder='Set List'></textarea>
                    </div>

                    <div className="col-span-full">
                    <button className="submit-btn" type='submit'>Submit</button>
                    </div>
                    </div>
                </form>
            </div>


            
        </>
    )

};

export default AddArtist;
