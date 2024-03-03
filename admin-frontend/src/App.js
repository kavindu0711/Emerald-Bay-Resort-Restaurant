import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { DeliverRiderDashBoard } from './components/pages/DeliveryRider/DeliverRiderDashBoard';
import { AdminDashBoard } from "./components/pages/AdminDashBoard";
import {AdminHome} from "./components/pages/Home";
import {DeliveryManagerDashBoard} from "./components/pages/DeliveryManager/DeliveryMangerDashBoard";
import {DeliveryManagerOrders} from "./components/pages/DeliveryManager/DeliveryManagerOrders";
import { DeliveryManagerProfile } from './components/pages/DeliveryManager/DeliveryManagerProfile';
import { ReservationManagerDashboard } from './components/pages/ReservationManager/ReservationManagerDashboard';
import { ReservationManagerProfile } from './components/pages/ReservationManager/ReservationManagerProfile';
import { TableReservations } from './components/pages/ReservationManager/TableReservations';
import { VIPRoomBooking } from './components/pages/ReservationManager/VIPRoomBooking';
import { EventManagement } from './components/pages/ReservationManager/EventManagement';
import { EmployeeManagerProfile } from './components/pages/EmployeeManager/EmployeeManagerProfile';
import { EmployeeManagerDashboard } from './components/pages/EmployeeManager/EmployeeManagerDashboard';
import {UpdateProfile} from './components/common/UpdateProfile';

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/delivery' element={<DeliverRiderDashBoard/>}></Route>
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route exact path="/" element={<AdminHome />} />
          <Route exact path="/deliveryManager" element={<DeliveryManagerDashBoard />} />
          <Route exact path="/deliveryManager/profile" element={<DeliveryManagerProfile />} />
          <Route exact path="/deliveryManager/orders" element={<DeliveryManagerOrders />} />
          <Route exact path="/reservationManager" element={<ReservationManagerDashboard />} />
          <Route exact path="/reservationManager/profile" element={<ReservationManagerProfile />} />
          <Route exact path="/reservationManager/tableReservations" element={<TableReservations />} />
          <Route exact path="/reservationManager/vipRooms" element={<VIPRoomBooking />} />
          <Route exact path="/reservationManager/events" element={<EventManagement />} />
          <Route exact path="/employeeManager" element={<EmployeeManagerDashboard />} />
          <Route exact path="/employeeManager/Profile" element={<EmployeeManagerProfile />} />
          <Route exact path="/deliveryManager/profile/updateProfile" element={<UpdateProfile />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;