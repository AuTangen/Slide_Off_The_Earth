import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import AddArtist from './components/AddArtist';
import AddVendor from './components/AddVendor';
import Artists from './components/Artists';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Stages from './components/Stages';
import Vendors from './components/Vendors';

function App(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/auth/userauth', { withCredentials: true })
    .then(res => {
      setUser(res.data.user)
    })
  },  []);

  return (

    <>
      <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home user={user} setUser={setUser}/> } />
          <Route path='/artists' element={<Artists user={user} setUser={setUser}/> } />
          <Route path='stages' element={<Stages user={user} setUser={setUser}/> } />
        </Routes>
      <Footer />
    </>

  );
}

export default App;
