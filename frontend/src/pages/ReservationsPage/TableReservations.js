import '../../App.css';
import NavBar from '../../components/Navbar';
import React, { useState } from 'react';
import './TableReservations.css'; // Import CSS for styling



export const TableReservations = () => {
  const [reservationData, setReservationData] = useState({
    time: '',
    date: '',
    guests: '',
    tableNumber: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit table reservation data
    console.log('Submitting table reservation:', reservationData);
  };

  return (
    <div className="reservation-container">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Table Number:
          <input type="text" name="tableNumber" value={reservationData.tableNumber} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={reservationData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={reservationData.time} onChange={handleChange} required />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={reservationData.guests} onChange={handleChange} min="1" max="10" required />
        </label>
        <label>
          Special Requests:
          <textarea name="specialRequests" value={reservationData.specialRequests} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

/*export const TableReservations = () => {
  const [reservationData, setReservationData] = useState({
    time: '',
    date: '',
    guests: '',
    tableNumber: '',
    specialRequests: '',
  });
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);

  // Simulated reservation data for demonstration
  const reservedTables = ['Table 1', 'Table 3']; // Example of already reserved tables

  useEffect(() => {
    // Fetch reservation data from backend API
    // Simulated reservation data for demonstration
    const availableTablesData = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'];
    setAvailableTables(availableTablesData);
  }, []);

  const handleTableClick = (table) => {
    setSelectedTable(table);
    setReservationData({ ...reservationData, tableNumber: table });
  };

  const isTableAvailable = (table) => {
    return !reservedTables.includes(table);
  };

  return (
    <div className="reservation-container">
      <h2>Table Reservation</h2>
      <div className="table-layout">
        {availableTables.map((table, index) => (
          <div
            key={index}
            className={`table ${isTableAvailable(table) ? 'available' : 'reserved'} ${selectedTable === table ? 'selected' : ''}`}
            onClick={() => isTableAvailable(table) && handleTableClick(table)}
          >
            {table}
          </div>
        ))}
      </div>
      <form className="reservation-form">
        {/* Input fields for reservation details */
        
        /*<button type="submit">Submit</button>
      </form>
    </div>
  );
};
*/