import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defNews from "../Daily News/NewsCard/news.png";


const Home_news = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a08bf6e670674064847960087a52761c")
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            })
    }, []);

    return (
        <div style={{ marginTop: "340px", marginLeft: "55px" }}>
            <div className="container my-5">
                <div className="row text-center">
                    {
                        news.map((val) => {
                            return (
                                <div className="col my-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={val.urlToImage || defNews} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home_news;
