/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Front from './components/Front_page/Front';
import Home from './components/Home_Page/Home';
import Daily_news from './components/Daily News/Daily_news';
import Weather from './components/Weather_Page/Weather';
import MyCalendar from './components/Calendar_Page/MyCalendar';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Front />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<Daily_news />} />
        <Route exact path="/calendar" element={<MyCalendar />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route path="*" element={<Navigate to="/" replace />} />   {/*If a path(page) doesn't exist then it redirect to home page*/}
      </Routes>
    </>
  )
}

export default App;
