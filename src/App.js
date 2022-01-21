import React, {useState} from 'react';
import './App.css';
import HomeImage from './Assets/homeimg4.png';
import Navbar from './Components/Navbar/Navbar';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />

        <div className='Row'>
          <div className='HomeContainer-left'>
            <div className='Home-title'>Farming is&nbsp;
            <span style={{color: '#EE2288', textDecoration: 'line-through'}}>
                <span style={{color: 'black'}}>Un</span>
              </span>
                certain
            </div>
            <div className='Home-content'>We, at Sage, make it certain.</div>
            <div className='Contact-button'>Get Started</div>
          </div>
          <div className='HomeContainer-right'>
            <img src={HomeImage} className='Home-image' alt='Home-img'/>
          </div>
        </div>
        <div className="Scroll">Scroll down
          <div className="arrow down"></div>
        </div>

      </header>

      <Page2 />
      <Page3 />
      <Page4 />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
