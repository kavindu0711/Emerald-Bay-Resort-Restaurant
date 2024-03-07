/*import React from 'react'
import userimg  from "../images/sysadmin.png";
import "../common/MyProfile.css";

export const MyProfile = () => {
  return (
    <div>
        <div className="profilecontainer">
            <div className="profilepic">
                <img className='proimg' src={userimg} alt="user" style={{width:'200px'}} />
            </div>
            <div className="personalinfo">

            </div>
            <div className="security">

            </div>
        </div>
    </div>
  )
}
*/

import React, { useState } from 'react';
import userimg from "../images/sysadmin.png";
import "../common/MyProfile.css";

export const MyProfile = () => {
  /*
  const [activeSection, setActiveSection] = useState('personal'); // Default to 'personal' section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };*/

  return (
    <div>
      <div className="profilecontainer">
        <div className="profilepic">
          <img className='proimg' src={userimg} alt="user" style={{ width: '200px' }} />
        </div>
       {/* <div className="tabs">
          <button onClick={() => handleSectionChange('personal')} className={activeSection === 'personal' ? 'active' : ''}>Personal Info</button>
          <button onClick={() => handleSectionChange('security')} className={activeSection === 'security' ? 'active' : ''}>Security</button>
        </div> */}

        <div className="section">
          
            <div className="personalinfo">
              {/* Your personal info content */}
              <label  className="fname">Employee ID <span className="dot">:</span> <span className='inputdata'>Iresh</span></label>
              <label  className="fname">First Name <span className="dot">:</span> <span className='inputdata'>Iresh</span></label>
              <label  className="lname">Last Name <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
              <label  className="nic">NIC <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
              <label  className="position">Position <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
              <label  className="mobile">Mobile Number <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
              <label  className="email">E mail <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
              <label  className="address">Address <span className="dot">:</span> <span className='inputdata'>Iresh</span></label> 
            </div>
          
          
        </div>
      </div>
    </div>
  );
};
