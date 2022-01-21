import React from 'react';
import '../../../App.css';
import './Contact.css';
import LetterImage from './Assets/letter.png';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function Contact() {
    const role = [
        {
          value: 'USD',
          label: 'Farmer',
        },
        {
          value: 'EUR',
          label: 'Buyer',
        },
        {
          value: 'BTC',
          label: 'Stakeholder',
        },
        {
          value: 'JPY',
          label: 'Media',
        },
        {
            value: 'STY',
            label: 'Student',
          },
      ];
    return (
        <div>
            <Navbar />
            <div className='Contact'>
                <div className='Contact-header'>
                    Have some questions?
                    <div className='Contact-headercontent'>Feel free to contact us</div>
                </div>
                
                <div className='Contact-maincontainer'>
                    <div className='Contact-imgcontainer'>
                        <img src={LetterImage} className='Contact-img' aria-label='LetterImage'/> 
                    </div>
                    <div className='Contact-contentcontainer'>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth margin="normal" />

                    <TextField id="outlined-basic" label="What's your Email?" variant="outlined" fullWidth margin="normal" />

                    <FormControl fullWidth margin='normal'>
                        <InputLabel htmlFor="outlined-adornment-amount">Phone No</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">+91</InputAdornment>}
                                    label="Phone No" />
                    </FormControl>

                    <TextField
                        id="filled-multiline-static"
                        label="Message" multiline rows={6}
                        variant="filled" fullWidth margin="normal" />

                    <TextField
                        id="outlined-select-currency"
                        select fullWidth margin='normal'
                        label="Select your role">
                    {role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                    </TextField>

                    <Link className='Contact-submit'>
                        Submit
                    </Link>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
