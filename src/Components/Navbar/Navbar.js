import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Sage from '../../Assets/sage.png';
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FarmerImage from '../../Assets/farmer.png';
import BuyerImage from '../../Assets/buyer.png';

function Navbar() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='Navbar Nav-row'>
            <div className='Nav-left'>
                <Link to="/">
                    <img src={Sage} className='Nav-Logo' alt='Sage-logo' />
                </Link>
                <Link to="/works" className='Nav-links'>How it Works?</Link>
                <Link to="/company" className='Nav-links'>Company</Link>
                <Link to="/testimonies" className='Nav-links'>Testimonies</Link>
            </div>
            <div className='Nav-right'>
                <Link onClick={openModal} className='NavLogin-button'>Login / Sign Up</Link>
                <Link to="/contact" className='NavContact-button'>Contact Us</Link>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Nav-header Modal"
                contentLabel="Complete Profile">
                <div className='Login-modal'>
                    <div className='LM-1 LoginModal-title'>Login
                        <IconButton aria-label="Settings" onClick={closeModal}>
                            <CloseIcon fontSize="large" sx={{ color: '#000' }}/>
                        </IconButton>
                    </div>
                <div className='LM-2'>
                    <div className='LM2-container'>
                        <img src={FarmerImage} className='LM2-img' />
                        <Link to="/farmerlogin" className='Login-button'>Login as a Farmer</Link>
                    </div>
                    <div className='LM2-container'>
                        <img src={BuyerImage} className='LM2-img' />
                        <Link to="/buyerlogin" className='Contact-button'>Login as a Buyer</Link>
                    </div>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar
