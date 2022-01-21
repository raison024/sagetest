import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
  
  export default function Team() {  
   
    return (
    <div className='TeamPage'>
    <div class="smoothSlideContainer">
        <Link to="/company" className='Team-goback'>Go back</Link>
        <div class="bar" id="bar1"></div>
        <div class="bar" id="bar2"></div>
        <div class="bar" id="bar3"></div>
        <div class="bar" id="bar4"></div>
        <div class="bar2" id="bar5"></div>
        <div class="bar" id="bar6"></div>
        <div class="bar2" id="bar7"></div>
        <div class="bar2" id="bar8"></div>
        <div id="person">
            <img
                id="imgModule"
                src="https://i.imgur.com/tU6Izd2.png" aria-label='img-module'/>
        </div>
    </div>
    </div>        
    )
}

