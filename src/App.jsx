import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Intro/Intro';
import Trending from './component/Content/Trending';
import Superhero from './component/Content/Superhero';
import "./style/landingPage.css"
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return <>
    <div>
      <div className="myBG border">
        <Navbar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  </>
}

export default App;
