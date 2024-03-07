import '../../App.css';
import NavBar from '../../components/Navbar';
import React, { useState } from 'react';
import '../../components/css/BarReservations.css'; // Import CSS for styling



export const BarReservations = () => {
  const [reservationData, setReservationData] = useState({
    time: '',
    date: '',
    guests: '',
    barArea: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit bar reservation data
    console.log('Submitting bar reservation:', reservationData);
  };

  return (
    <div className="reservation-container">
      <h2>Bar Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Bar Area:
          <select name="barArea" value={reservationData.barArea} onChange={handleChange} required>
            <option value="">Select Bar Area</option>
            <option value="Main Bar">Main Bar</option>
            <option value="Outdoor Bar">Outdoor Bar</option>
            <option value="Lounge Area">Lounge Area</option>
            {/* Add more options as needed */}
          </select>
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
          <input type="number" name="guests" value={reservationData.guests} onChange={handleChange} required />
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