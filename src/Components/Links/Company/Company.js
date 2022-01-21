import React, {useState} from 'react';
import '../../../App.css';
import './Company.css';
import Sage from './Assets/sage.png';
import TeamIcon from './Assets/user.jpg';
import BharathIcon from './Assets/bharath5.png';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Instagram, Facebook, LinkedIn} from '@mui/icons-material/'; 
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

function Company() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const TeamMembers = [
        { id: 1, name: "Bharath Dayananda", imglink: BharathIcon, role: "Chief Executive Officer", 
            facebook: "www.facebook.com", instagram: "www.instagram.com", linkedin: "www.linkedin.com"},

        { id: 2, name: "Mahipal Reddy", imglink: TeamIcon, role: "Hardware Head",
            facebook: "www.facebook.com", instagram: "www.instagram.com", linkedin: "www.linkedin.com"},

        { id: 3, name: "Kirthika Mohan", imglink: TeamIcon, role: "Data Analyst", 
            facebook: "www.facebook.com", instagram: "www.instagram.com", linkedin: "www.linkedin.com"},

        { id: 4, name: "Dr Renuka Prasad", imglink: TeamIcon, role: "Advisor",
            facebook: "www.facebook.com", instagram: "www.instagram.com", linkedin: "www.linkedin.com"}
      ];

    /*var peopleList = [
        "https://i.imgur.com/Kanxlp8.png",
        "https://i.imgur.com/DYSkxlB.png",
        "https://goj2.com/wp-content/uploads/2019/01/jimmySlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/melanieSlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/mSlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/troySlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/chelseaSlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/erikSlider.png",
        "https://goj2.com/wp-content/uploads/2019/01/hannahSlider.png",
        "https://i.imgur.com/tU6Izd2.png"
      ];
      var indexLength = peopleList.length;
      var currIndex = 0;
      document.getElementById("person").addEventListener(
        "animationiteration",
        function () {
          document.getElementById("imgModule").src = peopleList[currIndex];
          if (currIndex < indexLength - 1) {
            currIndex++;
          } else {
            currIndex = 0;
          }
        },
        false
      );*/

    return (
        <div>
        <Navbar />
        <div className='Company'>
            <div className='Company-container'>
                <div className='Company-title'>
                    About Us
                </div>
                <div className='Company-content'>
                    Dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text 
                    dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text 
                    dummy text dummy text
                </div>
                <Link className='Company-learnmore'>Learn More &rarr;</Link>
            </div>
            <div>
                <img src={Sage} className='Company-logo' />
            </div>
        </div>
        
        <div className='TeamPage'>
    <div class="smoothSlideContainer">
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
                src="https://i.imgur.com/tU6Izd2.png" />
        </div>

        <div className='Team-container'>
                    <div className='Team-title'>THE TEAM</div>
                    <div className='Team-maintitle'>Meet our  <span style={{color: '#C60A0A'}}>Team</span></div>
                    <div className='Team-content'>Dummy Text dummy text dummy text dummy text dummy text dummy text 
                        dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text 
                        dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text </div>
                    <Link className='Company-learnmore' onClick={openModal}>Learn More &rarr;</Link>
                </div>
    </div>
    </div>    

        <Footer />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Team-modal"
          contentLabel="Complete Profile">
              <div className='Team-modalcontainer'>
                <div className='TeamModal-headercontainer'>
                    <div className='TeamModal-title'>Our <span style={{color: ''}}>Team</span></div>
                    <IconButton aria-label="Settings" onClick={closeModal}>
                        <CloseIcon fontSize="large" sx={{ color: '#000' }}/>
                    </IconButton>
                </div>

                <div className='TeamModal-cardcontainer'>
                    {TeamMembers.map(person => {
                        return (
                            <div className='TeamModal-card' key={person.id}>
                                <img src={person.imglink} className='Team-cardicon' />
                                <div className='Team-cardname'>{person.name}</div>
                                <div className='Team-cardpost'>{person.role}</div>
                                <div className='Team-socialcontainer'>
                                    <IconButton size="large" href={person.facebook}>
                                        <Instagram fontSize='inherit' sx={{ color: '#fff' }}/>
                                    </IconButton>
                                    <IconButton size="large">
                                        <Facebook fontSize='inherit' sx={{ color: '#fff' }}/>
                                    </IconButton>
                                    <IconButton size="large">
                                        <LinkedIn fontSize='inherit' sx={{ color: '#fff' }}/>
                                    </IconButton>
                                </div>
                            </div>
                        )
                    })}
                </div>
              </div>
        </Modal>
        </div>
    )
}

export default Company
