import React, { useEffect } from 'react';
import CurrentLocation from './currentLocation.js';
import './Weather.css';
import NavBar from '../Navbar/NavBar.js';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '2a62828c09317d9b74edd5954968b0c32e956eca572e1d8b807a3e2338fdd0dc/stage';

const Weather = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
        })
    });

    return (
        <div className="home-div">
            <div className="container" style={{ minHeight: "100vh", backgroundColor: "rgb(194, 222, 233)" }}>
                <div className="row">
                    <div class="col-12" style={{ padding: "0px" }}>
                        <NavBar />
                        <React.Fragment>
                            <div className="container-wh">
                                <CurrentLocation />
                            </div>
                        </React.Fragment>
                        <div style={{ marginTop: "50px", fontSize: "40px", textAlign: "center", fontWeight: "bolder", color: "rgb(4, 4, 80)" }}>Commands:-</div>
                        <div className='whcmd' style={{ marginTop: "50px" }}>How does this work ?</div>
                        <div className='whcmd'>what is the [weather|temperature|humidity|pressure] in $(Location) ?</div>
                        <div className='whcmd'>in celsius ?</div>
                        <div className='whcmd'>is it raining in $(Location) ?</div>
                        <div className='whcmd'>And what about $(Location) ?</div>
                        <div className='whcmd'>what time ?</div>
                        <div className='whcmd' style={{ marginBottom: "80px" }}>is it going to warm on $(date) ?</div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Weather
