import '../../App.css';
import NavBar from '../../components/Navbar';
import React, { useState } from 'react';
import './OutsideReservations.css'; // Import CSS for styling



export const OutsideReservations = () => {
  const [reservationData, setReservationData] = useState({
    time: '',
    date: '',
    guests: '',
    seatingPreference: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit outside reservation data
    console.log('Submitting outside reservation:', reservationData);
  };

  return (
    <div className="reservation-container">
      <h2>Outside Party Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Seating Preference:
          <select name="seatingPreference" value={reservationData.seatingPreference} onChange={handleChange} required>
            <option value="">Select Seating Preference</option>
            <option value="Patio">Patio</option>
            <option value="Garden">Garden</option>
            <option value="Terrace">Terrace</option>
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
          <input type="number" name="guests" value={reservationData.guests} onChange={handleChange} min="1" max="25" required />
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