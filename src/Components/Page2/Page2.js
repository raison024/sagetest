import React from 'react';
import './Page2.css';
import ProcessFlow from './Assets/ProcessFlow1.gif';

function Page2() {
    return (
        <div className='Page2'>
            <header className='Page2-header'>
                <div className='Page2-row'>
                    <div className='Page2-column'>
                        <div className='Page2-title'>
                            Making farming Predictable,<br/>Profitable and Precise
                            <div className='Page2-titlecontent'>
                                We at sage, dummy text dummy text dummy text dummy text<br/>dummy text dummy text dummy text dummy<br/>text
                                dummy text dummy text du
                            </div>
                        </div>
                        
                        <div className='Page2-row'>
                        <div className='Page2-container'>
                            <div className='Page2-contenttitle'>
                                Predictable</div>
                                    <div className='Page2-content'>Connect, store, and blend data from hundreds of data sources.</div>
                                        <div className='Page2-seemore'>See More</div>
                        </div>
                        <div className='Page2-container'>
                            <div className='Page2-contenttitle'>
                                Profitable</div>
                                    <div className='Page2-content'>Empower everyone to explore and build beautiful, interactive visualizations.</div>
                                        <div className='Page2-seemore'>See More</div>
                        </div>
                        <div className='Page2-container'>
                            <div className='Page2-contenttitle'>
                                Precise</div>
                                    <div className='Page2-content'>A decision making platform to power all 
                                        of business dashboards needs.</div>
                                        <div className='Page2-seemore'>See More</div>
                        </div>
                        </div>
                    </div>
                    <img src={ProcessFlow} className='PhoneGIF' aria-label='Phone-GIF'/>
                </div>
            </header>
        </div>
    )
}

export default Page2
