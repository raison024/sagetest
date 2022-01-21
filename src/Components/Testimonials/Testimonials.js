import React from 'react';
import './Testimonials.css';
import UserIcon from './Assets/user2.jpg';

function Testimonials() {
    return (
        <div className='Testimonials'>
            <div className='Test-title'>TESTIMONIALS</div>
            <div className='Test-maintitle'>
                What our 
                <span style={{color: '#EE2288'}}> Clients say?</span>
            </div>
            <div className='Test-container'>
                <div className='Test-contentcontainer'>
                    <img src={UserIcon} className='Test-userimg' aria-label='Test-userimg'/>
                    <div className='Test-quotes'>&rdquo;</div>
                    <div className='Test-content'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className='Test-name'>Rohan Sharma</div>
                    <div className='Test-designation'>Agronomist</div>
                </div>

                <div className='Test-contentcontainer'>
                    <img src={UserIcon} className='Test-userimg' aria-label='User-icon'/>
                    <div className='Test-quotes'>&rdquo;</div>
                    <div className='Test-content'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className='Test-name'>Rohan Sharma</div>
                    <div className='Test-designation'>Agronomist</div>
                </div>

                <div className='Test-contentcontainer'>
                    <img src={UserIcon} className='Test-userimg' aria-label='UserIcon'/>
                    <div className='Test-quotes'>&rdquo;</div>
                    <div className='Test-content'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className='Test-name'>Rohan Sharma</div>
                    <div className='Test-designation'>Agronomist</div>
                </div>
            </div>
        </div>
        
    )
}

export default Testimonials
