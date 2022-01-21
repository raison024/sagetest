import React from 'react';
import '../../../App.css';
import './Works.css';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Sage from '../../../Assets/sage.png';
import SensorImage from './Assets/sensorimg2.jpg';
import DataImage from './Assets/analyticsimg.png';
import ProdDataImage from './Assets/ai.png';
import MarketImage from './Assets/dash2.png';
import NPK from './Assets/Data/npk.png';
import Temp from './Assets/Data/temp.png';
import Moisture from './Assets/Data/moisture.png';
import PH from './Assets/Data/ph.png';
import Predictive from './Assets/Analytics/predictive.png';
import Prescriptive from './Assets/Analytics/prescriptive.png';
import Yield from './Assets/Analytics/yield.png';
import Market from './Assets/Analytics/market.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from "react-scroll";

function Works() {
    const Data = [
        { id: 1, name: "NPK", imglink: NPK},
        { id: 2, name: "Temperature", imglink: Temp},
        { id: 3, name: "Micro-Climatic", imglink: Moisture},
        { id: 4, name: "Soil pH", imglink: PH}
      ];
      const Analytics = [
        { id: 1, name: "Predictive Analysis", imglink: Predictive},
        { id: 2, name: "Prescriptive Analysis", imglink: Prescriptive},
        { id: 3, name: "Yield Prediction", imglink: Yield},
        { id: 4, name: "Market Analytics", imglink: Market}
      ];

    return (
        <div>
        <Navbar />
        <div className='Works'>

        <div className='Works1'>
            <div className='Works1-title'>
                How it Works?
                <div className='Works1-content'>
                    The Sensors are installed at Farmer's site at no upfront cost. Using AI and ML we analyse and enhance the sensor data 
                    which will benefit farmers and B2B enterprise buyers.
                </div>
            </div>
            <div className='Works1-container'>    
                <ScrollLink activeClass="active" to="home" spy={true} smooth={true} className='Works1-link'>
                    1. Sensors
                </ScrollLink>
        
                <ScrollLink to="about" spy={true} smooth={true} className='Works1-link'>
                    2. Farm Analytics
                </ScrollLink>
        
                <ScrollLink to="contact" spy={true} smooth={true} className='Works1-link'>
                    3. Produce Data    
                </ScrollLink>
        
                <ScrollLink to="service" spy={true} smooth={true} className='Works1-link'>
                    4. Marketplace
                </ScrollLink>
            </div>
        </div>

        <div className='Works2'>
        <div className='Sensors' id='home'>
                <img src={DataImage} className='WorksSensor-img' />
                <div className='Works-WhatQues'>1. Sensors with no upfront cost installed at farmer's site</div>
                    <div className='Works-WhatContent'>Sage installs highly accurate sensors at the 
                        farmer's site with no upfront cost.
                        Our Sensors primarily collect data which include</div>
        </div>

        <div className='Sensors' id='about'>
        <img src={DataImage} className='WorksSensor-img' />
                <div className='Works-WhatQues'>2. Based on Sensor Data farmer receives analytics & advisory</div>
                    <div className='Works-WhatContent'>Farmer receives analytics 
                    on his phone which will help him in
                    farming scientifically, for which
                    he pays a subscription of Rs.
                    500 a month.</div>  
        </div>

        <div className='Sensors' id='contact'>
                <img src={ProdDataImage} className='WorksSensor-img' />
                <div className='Works-WhatQues'>3. The Sensor Data along with AI and ML algorithms is 
                    able to predict yield, quality,
                    expected date of harvest of the farm
                    which is useful for the buyers</div>
                    <div className='Works-WhatContent'>The farmers also are able to
                    produce high quality fruits and
                    vegetables by farming
                    scientifically and making data
                    driven decisions.</div>
               
        </div>

        <div className='Sensors' id='service'>
                <img src={MarketImage} className='WorksSensor-img' />
                <div className='Works-WhatQues'>4. With this data the buyer can directly connect with the farmer and make transactions using our marketplace</div>
                    <div className='Works-WhatContent'>With the rich data we have about produce grown in farms,
                    quantities, quality etc, we have a marketplace where all this
                    information is automatically updated and B2B enterprise buyers
                    like Big basket, Ninjacart, Reliance fresh can buy using our
                    dashboard. We charge only a 2% commission on this
                    purchase.</div>
               
        </div>
        </div>

        </div>
        <Footer className='Works-footer' />

        </div>
    )
}

export default Works
