import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

//pages
import { Home } from "./pages/HomePage/Home";
import { Main } from "./pages/ReservationsPage/Main";
import { TableReservations } from "./pages/ReservationsPage/TableReservations";
import { OutsideReservations } from "./pages/ReservationsPage/OutsideReservations";
import { BarReservations } from "./pages/ReservationsPage/BarReservations";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={< Main/>} />
        <Route path="/tableReservations" element={<TableReservations/>}/>
        <Route path="/barReservations" element={<BarReservations/>}/>
        <Route path="outsideReservations" element={<OutsideReservations/>}/>
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
