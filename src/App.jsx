import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import FrontPage from './components/FrontPage.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';

function App () {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;