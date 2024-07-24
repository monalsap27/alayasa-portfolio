import React from 'react'

import {  } from "../App.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
// import { portfolioList } from '../data/DataPortfolio';

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Portfolio/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home
