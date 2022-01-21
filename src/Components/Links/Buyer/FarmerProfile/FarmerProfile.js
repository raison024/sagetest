import React, { PureComponent, useState, useCallback} from 'react';
import FarmerIcon from './Assets/farmericon.jpg';
import IconButton from '@mui/material/IconButton';
import {Home, ManageAccounts, Settings, ExitToApp, Margin, Place, Agriculture, Grade} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './FarmerProfile.css';
import { Icon } from '@mui/material';
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import firstimage from './Assets/images/1.jpg';
import secondimage from './Assets/images/2.jpg';
import thirdimage from './Assets/images/3.jpg';
import fourthimage from './Assets/images/4.jpg';
import fifthimage from './Assets/images/5.jpg';
import sixthimage from './Assets/images/6.jpg';

const itemData = [
    {
      img: sixthimage,
      title: 'TomatoFarm',
    },
    {
      img: firstimage,
      title: 'Farm2',
    },
    {
      img: secondimage,
      title: 'Farm3',
    },
    {
      img: thirdimage,
      title: 'Farm4',
    },
    {
      img: fourthimage,
      title: 'Farm5',
    },
    {
      img: fifthimage,
      title: 'Farm6',
    },
  ];

function FarmerProfile() {
    return (
        <div className='Farmer-profile'>
        <div className='FarmerProfile-nav'>
            <Link to="/buyerdash"><IconButton aria-label="Home">
                <Home fontSize="large" sx={{ color: '#fff' }}/>
            </IconButton></Link>
            <IconButton aria-label="ManageAccount">
                <ManageAccounts fontSize="large" sx={{ color: '#fff' }}/>
            </IconButton>
            <IconButton aria-label="Settings">
                <Settings fontSize="large" sx={{ color: '#fff' }}/>
            </IconButton>
            <Link to="/"><IconButton aria-label="Exit">
                <ExitToApp fontSize="large" sx={{ color: '#fff' }}/>
            </IconButton></Link>
        </div>
        <div className='FarmerProfile-header'>
            <div className='Farmertitle-container'>
                Farmer Profile
            </div>
            <div className='FarmerProfileDetails-container'>
                <img src={FarmerIcon} className='FarmerProfile-icon' />
                <div className='FarmerProfileDetails-container2'>
                    <div className='FarmerName-title'>Ramappa</div>
                    <div className='FarmerHeading-content' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Agriculture />
                            &nbsp;Farm Size- 2 acres</div>
                    <div className='FarmerHeading-content' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Place />
                            &nbsp;Bengaluru, India</div>
                            <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
                    <div>
                        &nbsp;I grow Tomatoes.<br/>
                    </div>
                </div>
            </div>
            <ImageList sx={{ width: '110vmin', height: '80vmin' }} cols={4} rowHeight={'5vmin'}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"/>
                            </ImageListItem>
                        ))}
                    </ImageList>
        </div>
    </div>
    )
}

export default FarmerProfile
