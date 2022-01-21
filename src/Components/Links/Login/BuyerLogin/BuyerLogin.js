import React from 'react';
import './BuyerLogin.css';
import {Google, Facebook} from '@mui/icons-material';
import Sage from './Assets/sage.png';
import LoginPic from './Assets/image.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Footer from '../../../Footer/Footer';

function BuyerLogin() {
    return (
      <div>
        <div className="BuyerLogin-App">
          <header className='BuyerLogin-header'>
            <div className="Buyer-login">
              <div className="BuyerLogin-Container BuyerLogin-box1">
                <div className="Buyer-loginbox">
                <Link to="/">
                  <img src={Sage} className="BuyerLogin-logo" aria-label='Sage'/>
                </Link>
                  <div className="BuyerLogin-starttitle">Start farming<br/>the smart way.</div>
                  <img src={LoginPic} className="BuyerLogin-image" aria-label='LoginPic'/>
                </div>
              </div>

              <div className="BuyerLogin-Container BuyerLogin-box2">
                <div className="BuyerLogin-welcomebox">
                  <div className="BuyerLogin-welcometitle">Welcome</div>
                  <div className="BuyerLogin-continuetitle">Log In/Sign Up to continue as a buyer</div>

                  <form className="BuyerLogin-Column">
                    <input type="text" name="email" 
                      className="BuyerLogin-logininput" placeholder="Email"/>
                    <input type="password" name="password" 
                      className="BuyerLogin-logininput" placeholder="Password"/>

                    <Link className='BuyerLogin-forgotbtn'>Forgot Password?</Link>
                    <Link to="/buyerdash" className='BuyerLogin-loginbtn'>Login</Link>

                    <div className="BuyerLogin-Row">
                      <div className="BuyerLogin-line"/>
                        &nbsp;&nbsp;Or&nbsp;&nbsp;
                      <div className="BuyerLogin-line"/>
                    </div>

                    <div className="BuyerLogin-Row">
                      <Button 
                        variant="outlined" startIcon={<Google style={{color: 'blue'}}/>} className="FarmerLogin-socialbtn"
                        style={{borderWidth: '0.2vmin', borderColor: 'blue', 
                        borderRadius: '7vmin', textTransform: 'none', 
                        margin: '1vmin', color: 'blue', 
                        fontSize: '2vmin', marginTop: '1vmin', marginBottom: '1vmin'}}>
                        Google
                      </Button>
                      <Button 
                        variant="outlined" startIcon={<Facebook style={{color: 'blue'}}/>} 
                        className="FarmerLogin-socialbtn"
                        style={{borderWidth: '0.2vmin', borderColor: 'blue', 
                        borderRadius: '7vmin', textTransform: 'none', 
                        margin: '1vmin', color: 'blue', 
                        fontSize: '2vmin', marginTop: '1vmin', marginBottom: '1vmin'}}>
                        Facebook
                      </Button>
                    </div>

                    <div className="BuyerLogin-forgotbtn">Have no account yet?</div>

                    <Link className='BuyerLogin-registerbtn'>Register now</Link>
                  </form>

                </div>
              </div>
            
            </div>
          </header>
        </div>
        <Footer />
        </div>
      );
}

export default BuyerLogin
