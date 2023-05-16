import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

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
  // const [user, setUser] = useState(null)
 
  
  // useEffect(() => {
  //   axios.get('/auth/userauth').then(res => {
  //     setUser(res.data.user)
  //   })
  // }, []);

  return (

    <>
      <Header />
    <main>
      <Artists />
      <Stages />
      <Vendors />
      <News />
     

        {/* <Routes>
          <Route path='/addartist' element={<AddArtist/>} />
          <Route path='/addvendor' element={<AddVendor/>} />
          <Route path='/artist' element={<Artists/>} />
          <Route path='/faq' element={<FAQs/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/stages' element={<Stages/>} />
          <Route path='/vendors' element={<AddVendor/>} />
        </Routes> */}
    </main>
      <Footer />
    </>

  );
}

export default App;
