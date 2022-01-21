import React from 'react';
import './FarmerLogin.css';
import Button from '@mui/material/Button';
import {Google, Facebook} from '@mui/icons-material';
import Sage from './Assets/sage.png';
import LoginPic from './Assets/image.png';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';

function FarmerLogin() {
    return (
      <div>
      <div className="FarmerLogin-App">
      <header className='FarmerLogin-header'>
        <div className="Farmer-login">
          <div className="FarmerLogin-Container FarmerLogin-box1">
            <div className="Farmer-loginbox">
              <Link to="/">
                <img src={Sage} className="FarmerLogin-logo" aria-label='Sage'/>
              </Link>
              <div className="FarmerLogin-starttitle">Start farming<br/>the smart way.</div>
              <img src={LoginPic} className="FarmerLogin-image" aria-label='LoginPic'/>
            </div>
          </div>

          <div className="FarmerLogin-Container FarmerLogin-box2">
            <div className="FarmerLogin-welcomebox">
              <div className="FarmerLogin-welcometitle">Welcome</div>
              <div className="FarmerLogin-continuetitle">Log In/Sign Up to continue as a farmer</div>

              <form className="FarmerLogin-Column">
                <input type="text" name="email" 
                  className="FarmerLogin-logininput" placeholder="Email"/>
                <input type="password" name="password" 
                  className="FarmerLogin-logininput" placeholder="Password"/>

                <Link className='FarmerLogin-forgotbtn'>Forgot Password?</Link>
                <Link to="/buyerdash" className='FarmerLogin-loginbtn'>Login</Link>

                <div className="FarmerLogin-Row">
                  <div className="FarmerLogin-line"/>
                    &nbsp;&nbsp;Or&nbsp;&nbsp;
                  <div className="FarmerLogin-line"/>
                </div>

                <div className="FarmerLogin-Row">
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

                <div className="FarmerLogin-forgotbtn">Have no account yet?</div>

                <Link className='FarmerLogin-registerbtn'>Register now</Link>
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

export default FarmerLogin
