/*import React from 'react'
import DeliveryRiderSideBar from '../components/DeliveryRiderSideBar';
import '../components/css/DeliverRiderDashBoard.css';

export const DeliverRiderDashBoard = () => {
  return (
    <div>
        <DeliveryRiderSideBar />
        <div className="deliveryridercontainer">
            <h1>Delivery Rider DashBoard</h1>
        </div>
    </div>
  )
}*/

import React from 'react';
import DeliveryManagerSideBar from './DeliveryManagerSideBar.js';
import  "../../../components/pages/DeliveryManager/DeliveryManagerDashBoard.css";
import succesimg from "../../images/successmark.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faTruckFast } from '@fortawesome/free-solid-svg-icons';



export const DeliveryManagerDashBoard = () => {
  return (
    <div className="dashboard-container">
      <DeliveryManagerSideBar />
      <div className="deliverymanagercontainer">
        
        <div className="orderset">
          <div className="succes">
          <img  className="succesimg" src={succesimg} alt="correct" />
              <h3>Success Delivery</h3>
              <h2 style={{marginBottom:'5px'}}>100</h2>
          </div>

          <div className="ongoing">
              
              <FontAwesomeIcon  className="ongoingimg" icon={faTruckFast} fade size="2xl" style={{color: "#00ff2a",}} />
              <h3>Ongoing Delivery</h3>
              <h2 style={{marginBottom:'5px'}}>12</h2>
          </div>

          <div className="availabledeliveryman">
              <FontAwesomeIcon className='availableimg' icon={faUser} bounce  size='2xl' style={{color: "#63E6BE"}} />
          
              <h3>Active Riders</h3>
              <h2 style={{marginBottom:'5px'}}>5</h2>
          </div>
        </div>

        
      </div>
    </div>
  );
};

