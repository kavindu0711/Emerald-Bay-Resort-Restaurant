import React from 'react';
import DeliveryManagerSideBar from './DeliveryManagerSideBar.js';
import  "../../../components/pages/DeliveryManager/DeliveryManagerProfile.css";
import { MyProfile } from '../../common/MyProfile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../common/UpdateProfile.css';


export const DeliveryManagerProfile = () => {

  const navigate = useNavigate();

  const handleUpdateProfileClick = ()=>{
    navigate('/deliveryManager/profile/updateProfile')
  }
  
  return (
    <div className="dashboard-container">
      <DeliveryManagerSideBar />
      <div className="myprofile">
        {/* <h1>Profile section</h1> */}
        <div className="profilepoto">
            <MyProfile/>
        </div>      
        <div className="updateuser">
          <button onClick={handleUpdateProfileClick}><FontAwesomeIcon icon={faUserPen} beat size='2xl'/></button></div> 
      </div>

      
    </div>
  );
};

