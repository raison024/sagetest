import React from 'react';
import './Page3.css';
import Sensor from './Assets/sensorimg.png';
import Data from './Assets/data.png';
import Spray from './Assets/manspray.png';
import Market from './Assets/market.png';
import Farmer from './Assets/farmer2.png';

function Page3() {
    return (
        <div className='Page3'>
            <div className='Page3-title'>What is in it for&nbsp;<span style={{color: '#EE2288'}}>Farmers?</span>&nbsp;
                <div className='Page3-titlecontent'>
                     
                </div>
            </div>
            <div className='Page3-row'>
                
                    <img src={Farmer} className='Page3-FarmerImg'/>
               
                <div className='Page3-container'>
                    <div className='Page3Content-container'>
                        <img src={Sensor} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Sensor
                            <div className='Page3-imgcontent'>
                            Farmers get highly accurate sensors at no upfront cost
                            </div>
                        </div>
                    </div>
                    <div className='Page3Content-container'>
                        <img src={Data} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Data
                            <div className='Page3-imgcontent'>
                            Farmer gets analytics and advisory for a nominal subscription fee of Rs. 500 a month.
                            </div>
                        </div>
                    </div>
                    <div className='Page3Content-container'>
                        <img src={Spray} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Better Price
                            <div className='Page3-imgcontent'>
                            Farmer is able to cut down his input costs by upto 50% based on precision advice on what to spray when.
                            </div>
                        </div>
                    </div>
                    <div className='Page3Content-container'>
                        <img src={Market} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Marketplace
                            <div className='Page3-imgcontent'>
                            Farmer gets a fair market to sell his produce at higher prices directly to B2B enterprises.

                            </div>
                        </div>
                    </div>
                    <div className='Page3Content-container'>
                        <img src={Data} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Better Price
                            <div className='Page3-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>
                    <div className='Page3Content-container'>
                        <img src={Spray} className='Page3-img' />
                        <div className='Page3-imgtitle'>
                            Better Price
                            <div className='Page3-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page3
