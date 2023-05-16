import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import axios from 'axios'



import AddArtist from './components/AddArtist';
import AddVendor from './components/AddVendor';
import Artists from './components/Artists';
import FAQs from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Stages from './components/Stages';
import Vendors from './components/Vendors';

function App() {
  const [errMessage, setErrMessage] = useState('')

  const [formState, setFormState] = useState({
    name: '',
    artists: '',
    stage: '',
    day: '',
    time: '',
    uploaded_file: '',
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
    try {
      const res = await axios.post('/api/addband', formState);

      // props.setUser(res.data.user);

      setFormState({
        name: '',
        artists: '',
        stage: '',
        day: '',
        time: '',
        uploaded_file: '',
        setlist: ''
      })

    } catch (err) {
      if (err.code === 402) {
        setErrMessage(err.response.data.error)
      }
    }
  }

  // const deleteFav = async (drinkID) => {

  //     try{
  //         const res = await axios.put(`/api/fav/${drinkID}`)
  //         props.setUser(res.data.user)
  //     } catch (err) {
  //         if (err.code === 402) {
  //             setErrMessage(err.response.data.error)
  //         }
  //     }

  // }

  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name', 
uploadPreset: 'my_preset'}, (error, result) => { 
if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info); 
}
}
  )

  document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
}, false);


  return (
    <>


      <main>
        <h1>Welcome</h1>

        <form onSubmit={createBand}>
          <h2>Add a Drink</h2>
          {errMessage && <p>{errMessage}</p>}
          <input name='name' value={formState.name} onChange={handleChange} type="text" placeholder="Band Name"></input>
          <input name='artists' value={formState.artists} onChange={handleChange} type="text" placeholder="Artists"></input>
          <input name='stage' value={formState.stage} onChange={handleChange} type="text" placeholder="Stage"></input>
          <input name='day' value={formState.day} onChange={handleChange} type="text" placeholder="Day"></input>
          <input name='time' value={formState.time} onChange={handleChange} type="text" placeholder="Time"></input>
          {/* <input name='uploaded_file' value={formState.imageURL} onChange={handleChange} type="file" placeholder="Add an image"></input> */}
          <button name='uploaded_file' value={formState.uploaded_file}  id="upload_widget" class="cloudinary-button">Upload files</button>
          <input name='setlist' value={formState.setlist} onChange={handleChange} type="text" placeholder="setlist"></input>
          <button>Add Band</button>
        </form>

        

        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>

        
        
       

        {/* {props.user && props.user.favorites.length && <h2 className="text-center">Favorites</h2>}
        <div className="favorites">
            {props.user.favorites.map((fav) => (
                <div className="fav" key={fav._id}>
                    <p>{fav.name}</p>
                    <p>Category: {fav.category}</p>
                    <p>Ingredients: {fav.ingredents}</p>
                    <p>Instructions: {fav.instructions}</p>
                    <p>Created by: {fav.user.username}</p>
                    <button onClick={() => deleteFav(fav._id)}>Remove from Favorites</button>
                </div>
            ))}
        </div> */}
      </main>

    </>
  )

}

export default App;
