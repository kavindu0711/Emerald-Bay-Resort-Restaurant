import React from 'react'
import Sidebar from './DeliveryManagerSideBar';
import { useNavigate } from 'react-router-dom'


export const DeliveryManagerUpdateProfile = () => {
const navigate = useNavigate();

const handleSave = () =>{
  navigate('/deliveryManager/profile')
}

  return (
    <div className='updateprofiledashboard'>
        <Sidebar />
        <div className="updateprofilecontainer">
            Update profile
            <form action="" className="updateform">
              <label htmlFor="">Employee ID <input type="text" name="empid" id="" disabled /></label>
              <label htmlFor="">First Name <input type="text" name="empid" id="" /></label>
              <label htmlFor="">Last Name <input type="text" name="empid" id="" /></label>
              <label htmlFor="">NIC<input type="text" name="empid" id="" disabled /></label>
              <label htmlFor="">Position <input type="text" name="empid" id="" disabled/></label>
              <label htmlFor="">Mobile Number <input type="text" name="empid" id="" /></label>
              <label htmlFor="">E mail <input type="text" name="empid" id="" /></label>
              <label htmlFor="">Address <input type="text" name="empid" id="" /></label>
              <label htmlFor="">Profile Picture  <input type="file" src="" alt="" /> </label>

              <div className="buttons">
              <button className='submit' onClick={handleSave}>Save</button>
              <button className='delete'>Delete Account</button>
              
              </div>
            </form>
        </div>
    </div>
  )
}
