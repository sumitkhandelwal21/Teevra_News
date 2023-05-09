import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import NavBar from '../Navbar/NavBar';
import 'react-calendar/dist/Calendar.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import './MyCalendar.css';

const alanKey = '2a62828c09317d9b74edd5954968b0c32e956eca572e1d8b807a3e2338fdd0dc/stage';

const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

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
                        <div className="calen">
                            <div className='mod'>
                                <Calendar onChange={onChange} value={value} />
                            </div>
                        </div>
                        <div style={{ marginTop: "50px", fontSize: "40px", textAlign: "center", fontWeight: "bolder", color: "red" }}>Commands:-</div>
                        <div className='calcmd' style={{ marginTop: "50px" }}>What is the current date ?</div>
                        <div className='calcmd' >What day will be $(date) next year ?</div>
                        <div className='calcmd'>What is my current timezone ?</div>
                        <div className='calcmd'>What is the day and time today ?</div>
                        <div className='calcmd'>What day is tomorrow ?</div>
                        <div className='calcmd' style={{ marginBottom: "80px" }}>What day would be $(date) last year ?</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCalendar;
