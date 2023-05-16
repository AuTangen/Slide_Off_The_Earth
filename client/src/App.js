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
import Login from './components/Login';
import News from './components/News';
import Register from './components/Register'
import Stages from './components/Stages';
import Vendors from './components/Vendors';
import Login from './components/Login';
import Register from './components/Register';

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
        <main>
        <Routes>
          <Route path='/' element={<Home user={user} setUser={setUser}/> } />
          <Route path='/artists' element={<Artists user={user} setUser={setUser}/> } />
          <Route path='/stages' element={<Stages user={user} setUser={setUser}/> } />
          <Route path='/vendors' element={<Vendors user={user} setUser={setUser}/> } />
          <Route path='/news' element={<News user={user} setUser={setUser}/> } />
          <Route path='/faq' element={<FAQ user={user} setUser={setUser}/> } />
          <Route path='/login' element={<Login user={user} setUser={setUser}/> } />
          <Route path='/register' element={<Register user={user} setUser={setUser}/> } />
        </Routes>
        </main>
      <Footer />
    </>

  );
}

export default App;
