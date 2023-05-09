/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar/NavBar.js';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import useStyles from './main_styles';
import NewsCards from '../Daily News/NewsCards/NewsCards';

const alanKey = '2a62828c09317d9b74edd5954968b0c32e956eca572e1d8b807a3e2338fdd0dc/stage';

const Daily_news = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setactiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    // console.log(articles)
                    setNewsArticles(articles);
                    setactiveArticle(-1);
                }
                else if (command === 'highlight') {
                    setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if (command === 'open') {
                    console.log(number);
                    // for => four => 4
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText('Please try that again.')
                    }
                    else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }

                }
            }
        })
    });

    return (
        <div className="home-div">
            <div className="container " style={{ minHeight: "100vh", backgroundColor: "rgb(194, 222, 233)" }}>
                <div className="row">
                    <div class="col-12" style={{ padding: "0px" }}>
                        <NavBar />
                        <div style={{ padding: "50px" }}>
                            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daily_news;
