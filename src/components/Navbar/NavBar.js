/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../assets/logoR.svg';
import { NavLink } from 'react-router-dom';
import Clock from "react-live-clock";
import * as moment from 'moment';
import weth from './weth.png';


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#243238" }}>
            <div class="container-fluid">
                <div className='icon'>
                    <img src={logo} alt="logo" style={{ height: "30px", width: "30px", marginRight: "10px", marginTop: "-8px" }} />
                    <a class="navbar-brand" href="/" style={{ fontWeight: "bolder", color: "red" }}>TEEVRA</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        &nbsp;
                        &nbsp;
                        <li>
                            <NavLink
                                exact
                                to="/home"
                                style={({ isActive }) => ({
                                    color: isActive ? "yellow" : "white",
                                })}
                            >
                                Home
                            </NavLink>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li>
                            <NavLink
                                exact
                                to="/news"
                                style={({ isActive }) => ({
                                    color: isActive ? "yellow" : "white",
                                })}
                            >
                                Daily News
                            </NavLink>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li>
                            <NavLink
                                exact
                                to="/calendar"
                                style={({ isActive }) => ({
                                    color: isActive ? "yellow" : "white",
                                })}
                            >
                                Calendar
                            </NavLink>
                        </li>
                        &nbsp;
                        &nbsp;
                        <li>
                            <NavLink
                                exact
                                to="/weather"
                                style={({ isActive }) => ({
                                    color: isActive ? "yellow" : "white",
                                })}
                            >
                                Weather
                            </NavLink>
                        </li>

                    </ul>
                    <div className='d-flex'>

                        <div style={{ color: "white" }}>
                            <Clock format="HH:mm:ss" interval={1000} ticking={true} style={{ marginLeft: "23px" }} />
                            <br />
                            {moment(new Date()).format('DD-MM-YYYY')}
                        </div>
                        &nbsp;
                        &nbsp;
                        <img src={weth} alt="" style={{ width: "50px", height: "50px" }} />
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
