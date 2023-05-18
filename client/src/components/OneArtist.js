import { NavLink, useNavigate, useParams, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';
import { BsXSquareFill } from "react-icons/bs";

function OneArtist(props) {
    const [showForm, setShowForm] = useState(false);

    const [setList, setSetList] = useState(false);
   
  const updateForm = () => {
    setShowForm(!showForm);
  }

  const showSetList = () => {
    setSetList(!setList);
  }
   
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [artist, setArtist] = useState({});

    useEffect(() => {
        
        axios.get(`/api/artists/${id}`)
            .then(res => {
                console.log('res', res.data)
                setArtist(res.data);
                
            });
    }, []);

    const deleteArtist = async (artistID) => {
       
        try{
            const res = await axios.delete(`/api/artist/${artistID}`)
            console.log('deleted')
            console.log(res.data)
            setArtist({});
            navigate('/artists')
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
        
    }


    const OutputArtist = ({artist}) => {
        console.log('artist', artist)

        return (
            <div className="one-artist-section">
            <div key={artist._id} className="one-artist">

                

                <img src={bando} alt="the band" className="w-full" />
                {props.user && (
                <div class='edit-delete-artist-container'>
                <button onClick={updateForm} id='edit-artist' className="edit-artist">Update Info</button>
                <button onClick={() => deleteArtist(artist._id)} id='delete-artist' className="delete-artist">Delete</button>
            </div>)}
                <div className="artist-info">

                <h4>{artist.name}</h4>
                <p>Members: {artist.artists}</p>
                <p>Stage: {artist.stage}</p>
                <p>Day: {artist.day}</p>
                <p>Time: {artist.time}</p>
                <button className='setlist-btn' onClick={showSetList}>Show Set List</button>
              {setList && <p>Set List: {artist.setlist}</p>}

                {/* {props.user && (
              drink.favorited ? <button disabled>Favorited</button> :
                <button onClick={() => saveFavorite(drink._id)}>Favorite This Drink</button>
            )} */}
            </div>
            </div>
            </div>
        );
    }
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
    
    const updateBand = async (event) => {
        event.preventDefault();
        console.log('submitted!')
        console.log(formState)
        try {
            const res = await axios.put(`/api/artist/${id}`, formState);
    
            // props.setUser(res.data.user);
    
            setFormState({
                name: '',
                artists: '',
                stage: '',
                day: '',
                time: '',
                setlist: ''
            })
            setArtist(res.data.artists);
    
        } catch (err) {
            if (err.code === 402) {
                console.log(err)
            }
        }
    }

    return (
        <>

            <section className='one-artist-container'>
                {/* {OutputArtist} */}
                <OutputArtist artist={artist} />
                {showForm && (
                <>
            <h2 className="section-title">Update</h2>
            

                <form className='update-form' onSubmit={updateBand}>
                    
                <div class="form-container update-form">
               <BsXSquareFill onClick={updateForm}/>
                    <div className="col-span-full mt-2">
                    <label for="name">Artist Name</label>
                    <div className='mt-1'>
                    <input name='name' value={formState.name} onChange={handleChange} className="form-element" type='text' placeholder={`${artist.name}`}></input>
                        </div>            
                    </div>
                    
                    <div className="col-span-full mt-2">
                    <label for="artists" >Band Members</label>
                    <div className='mt-1'>
                    <input name='artists' value={formState.artists} onChange={handleChange} className="form-element" type='text' placeholder={`${artist.artists}`}></input>
                    </div>
                    </div>

                    <div className="col-span-full mt-2">
                    <label for="stage">Select a Stage:</label> 
                    <div className='mt-1'>
                        <select  name='stage' value={formState.stage} onChange={handleChange} className="form-element" id="stages"> 
                            <option value="">Select a Stage</option> 
                            <option value="Main Stage">Main Stage</option> 
                            <option value="Almost Famous Stage">Almost Famous Stage</option> 
                            <option value="Noob Stage">Noob Stage</option> 
                        </select>
                        </div>
                        </div>

                    <div className="sm:col-span-2 sm:col-start-1 mt-2">
                    <label className="block leading-6" for="date" >Select a Date</label>
                        <div className='mt-1'>
                    <input name='day' value={formState.day} onChange={handleChange} className="form-element block w-full" type="date"></input>
                    </div>
                    </div>

                    <div className="sm:col-span-2 mt-2">
                    <label className="block leading-6" for="time">Select a time</label>
                        <div className='mt-1'>
                    <input name='time' value={formState.time} onChange={handleChange} className="form-element block w-full" type="time" id="time"></input>
                    </div>
                    </div>

                    <div className="col-span-full mt-2">
                    <textarea name='setlist' value={formState.setlist} onChange={handleChange} className="form-element my-4" placeholder={`${artist.setlist}`}></textarea>
                    </div>

                    <div className="col-span-full">
                    <button className="submit-btn" type='submit'>Submit</button>
                    </div>
                    </div>
                </form>
</>
)}
            </section>

           


        </>
    )

};

export default OneArtist;