import React from 'react';
import './Front.css';
import './Front-desc.css'
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

const Front = () => {
    return (
        <div className="main-div">
            <div className="desc" >
                <div class="static-txt">I'm Voice Controlled News App </div>
                <div class="static-txt"> & I will </div>
                <ul class="dynamic-txts">
                    <li><span>Display latest news</span></li>
                    <li><span>Read news headlines</span></li>
                    <li><span>Show weather conditions</span></li>
                    <li><span>Display day information</span></li>
                </ul>
                <br />
                <br />
                <div className='start'>
                    <NavLink
                        exact
                        to="/home"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "black",
                        })}
                    >
                        Let's Start &gt;
                    </NavLink>
                </div>
            </div>
            <div className="logo">
                <img className="t" src={logo} alt="" style={{ height: "100px", width: "100px" }} />
            </div>

            <br />
            <br />

            <div className="title">
                TEEVRA
            </div>
        </div>
    );
}

export default Front;
