import React from 'react';
import './Page4.css';
import Data from './Assets/data.png';
import Price from './Assets/price.png';
import Quality from './Assets/quality.png';
import Buyer from './Assets/buyer2.png';

function Page4() {
    return (
        <div className='Page4'>
            <div className='Page4-title'>How the&nbsp;<span style={{color: '#26d7ab'}}>Buyers</span>&nbsp;benefit?
                <div className='Page4-titlecontent'>
                     
                </div>
            </div>
            <div className='Page4-row'>

                <div className='Page4-container'>
                    <div className='Page4Content-container'>
                        <img src={Data} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Data
                            <div className='Page4-imgcontent'>
                                Get consistent flow of data about your farm
                            </div>
                        </div>
                    </div>
                    <div className='Page4Content-container'>
                        <img src={Quality} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Better Quality
                            <div className='Page4-imgcontent'>
                                Using the data, quality of the produce can be enhanced
                            </div>
                        </div>
                    </div>
                    <div className='Page4Content-container'>
                        <img src={Price} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Better Price
                            <div className='Page4-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>
                    <div className='Page4Content-container'>
                        <img src={Price} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Better Price
                            <div className='Page4-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>
                    <div className='Page4Content-container'>
                        <img src={Price} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Better Price
                            <div className='Page4-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>
                    <div className='Page4Content-container'>
                        <img src={Price} className='Page4-img' aria-label='Data'/>
                        <div className='Page4-imgtitle'>
                            Better Price
                            <div className='Page4-imgcontent'>
                                Get better price for your yeild as the quality is much better
                            </div>
                        </div>
                    </div>
                </div>

                <img src={Buyer} className='Page4-FarmerImg' aria-label='Buyer'/>
                
            </div>
        </div>
    )
}

export default Page4
