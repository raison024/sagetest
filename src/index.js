import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Company from './Components/Links/Company/Company';
import Team from './Components/Links/Company/Team/Team';
import Contact from './Components/Links/Contact/Contact';
import FarmerLogin from './Components/Links/Login/FarmerLogin/FarmerLogin';
import BuyerLogin from './Components/Links/Login/BuyerLogin/BuyerLogin';
import Testimonies from './Components/Links/Testimonies/Testimonies';
import Works from './Components/Links/Works/Works';
import BuyerDash from './Components/Links/Buyer/BuyerDash';
import BuyerDash2 from './Components/Links/Buyer/BuyerDash2/BuyerDash2';
import FarmerProfile from './Components/Links/Buyer/FarmerProfile/FarmerProfile';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
        <App />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/farmerlogin">
          <FarmerLogin />
        </Route>
        <Route path="/buyerlogin">
          <BuyerLogin />
        </Route>
        <Route path="/testimonies">
          <Testimonies />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/buyerdash">
          <BuyerDash />
        </Route>
        <Route path="/buyerdash2">
          <BuyerDash2 />
        </Route>
        <Route path="/farmerprofile">
          <FarmerProfile />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
