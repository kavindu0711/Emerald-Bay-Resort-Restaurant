/*import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import userImage from '../../images/admin.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import '../../pages/DeliveryRider/DeliveryRidersideBar.css';

const Sidebar = () => {
  const user = {
    name: 'John Doe',
    image: userImage,
  };

  
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="avatar">
            <img src={user.image} alt={user.name} style={{ width: '150px', borderRadius: '50%', border:'3px solid black' }} />
          </div> <br />
          <div className="user-details">
            <h5 className="user-name">{user.name}</h5>
            <p>Delivery Rider</p>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
            <FontAwesomeIcon className='ordermenuicon' icon={faTruck} style={{color: "#ffffff", alignItems:'left', paddingLeft:'35px'}} />
              <CDBSidebarMenuItem className='ordermenu' src={faTruck} >Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='user'> Profile </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center',  }}>
          <div
            style={{
              padding: '20px 5px',textDecoration: 'none'
            }}
          >
            <NavLink exact to="/" activeClassName="activeClicked">
            <FontAwesomeIcon icon={faSignOutAlt} style={{color: "#ffffff",}} />

              <CDBSidebarMenuItem style={{color:'white',textDecoration: 'none'}}>Sign Out</CDBSidebarMenuItem>
            </NavLink>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
};

export default Sidebar;
*/

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import userImage from '../../images/admin.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
  const user = {
    name: 'John Doe',
    image: userImage,
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  

  return (
    <div style={{ display: 'flex', height: '100vh', /*overflow: 'scroll initial'*/flex: '0 0 300px' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#23395d">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="avatar">
            <img src={user.image} alt={user.name} style={{ width: '150px', borderRadius: '50%', border:'3px solid black' }} />
          </div> <br />
          <div className="user-details">
            <h5 className="user-name">{user.name}</h5>
            <p>Delivery Manager</p>
          </div>
          <hr style={{color:'white', width:'200px', borderWidth:'10px'}}/>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/deliveryManager" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/deliveryManager/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='user'> Profile </CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/deliveryManager/orders" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="truck">Orders</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plane">Leaves And OT</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px', textDecoration: 'none' }}>
            <NavLink exact to="/" activeClassName="activeClicked">
              <FontAwesomeIcon icon={faSignOutAlt} style={{color: "#ffffff"}} />
              <CDBSidebarMenuItem style={{color:'white', textDecoration: 'none'}}>Sign Out</CDBSidebarMenuItem>
            </NavLink>
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
};

export default Sidebar;
