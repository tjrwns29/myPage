import React, { useState, Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import './App.css';

function App() {
    return (
      <div>
        <SideBar></SideBar>
        <div className='container'>
          <div className='Time'>
            <div>0000년 00월 00일 00:00:00</div>
          </div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
      </div>
    );
}

export default App;