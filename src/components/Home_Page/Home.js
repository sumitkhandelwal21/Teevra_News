/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './Home.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Navbar/NavBar";
import Carousel from "../Carousel/Carousel";
import Home_news from "./Home_news";

const Home = () => {
    return (
        <div className="home-div">
            <div className="container" style={{ minHeight: "100vh", backgroundColor: "rgb(194, 222, 233)" }}>
                <div className="row">
                    <div class="col-12" style={{ padding: "0px" }}>
                        <NavBar />
                        <Carousel />
                        <Home_news />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;