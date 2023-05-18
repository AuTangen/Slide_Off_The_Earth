import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bando from '../assets/bando.jpg';
import mainStage from '../assets/main_stage.jpeg';
import almostStage from '../assets/almost_famous.jpeg';
import noobStage from '../assets/noob_stage.jpeg';
function Stages(props) {

    const [mainArtists, setMainArtists] = useState([]);

    const [almostArtists, setAlmostArtists] = useState([]);

    const [noobArtists, setNoobArtists] = useState([]);

    useEffect(() => {
        axios.get('/api/mainstage')
            .then(res => {
                console.log(res.data)
                setMainArtists(res.data);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/almoststage')
            .then(res => {
                console.log(res.data)
                setAlmostArtists(res.data);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/noobstage')
            .then(res => {
                console.log(res.data)
                setNoobArtists(res.data);
            });
    }, []);


    const OutputMainBands = (bands) => {
        console.log('artist', bands)
        console.log(bands.name)
        return (

            <p key={bands._id} className="">{bands.name}</p>
        )
    }

    const OutputAlmostBands = (bands) => {
        console.log('artist', bands)
        console.log(bands.name)
        return (

            <p key={bands._id} className="">{bands.name}</p>
        )
    }

    const OutputNoobBands = (bands) => {
        console.log('artist', bands)
        console.log(bands.name)
        return (

            <p key={bands._id} className="">{bands.name}</p>
        )
    }
    // const navigate = useNavigate();

    return (
        <>
            <section className='page-container'>
                <h2>STAGES</h2>




                <div className='stage-container'>
                    <h3>Main Stage</h3>
                    <div className='img-wrap'>
                        <img className='stage-img' src={mainStage} alt="main stage"></img>
                    </div>
                    <div className='descr-container'>
                        <div className=''>
                            <h2>Featured Bands</h2>
                            {mainArtists.map(OutputMainBands)}
                        </div>

                    </div>
                </div>
                <div className='stage-container'>
                    <h3>Almost Famous Stage</h3>
                    <div className='img-wrap'>
                        <img className='stage-img' src={almostStage} alt="almsot famous stage"></img>
                    </div>
                    <div className='descr-container'>
                        <div className=''>
                            <h2>Featured Bands</h2>
                            {almostArtists.map(OutputAlmostBands)}
                        </div>

                    </div>
                </div>

                <div className='stage-container'>
                    <h3>Noob Stage</h3>
                    <div className='img-wrap'>
                        <img className='stage-img' src={noobStage} alt="noob stage"></img>
                    </div>
                    <div className='descr-container'>
                        <div className=''>
                            <h2>Featured Bands</h2>
                            {noobArtists.map(OutputNoobBands)}
                        </div>

                    </div>
                </div>


            </section>
        </>
    )

};

export default Stages;