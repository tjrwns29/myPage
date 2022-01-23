import React, { useState, Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import Time from './Components/Time';
import './App.css';

function App() {
    return (
      <div>
        <SideBar></SideBar>
        <div className='container'>
          <Time></Time>
          <Header></Header>
          <Main></Main>
        </div>
          <Footer></Footer>
      </div>
    );
}

export default App;