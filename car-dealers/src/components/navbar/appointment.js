import React from 'react';
import './appointment.css';
import { Link } from 'react-router-dom';

function Appointment() {
  return (
    <div className='appointment-form'>
      <h1>Car Appointment</h1>
      <form>
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name' placeholder='fname' />

        <label htmlFor='name'>Last Name</label>
        <input type='text' name='name' placeholder='lname' />

        <label htmlFor='date'>Select Date</label>
        <input type='text' placeholder={new Date().toLocaleDateString()} />

        <select name='car-selection' id='car-selection'>
          <option value='car1'>Sedan</option>
          <option value='car2'>SUVs</option>
          <option value='car3'>Coupe</option>
          <option value='car4'>Luxury Cars</option>
          <option value='car5'>Four-wheel</option>
        </select>

        <select name='Car-selection' id='Car-selection'>
          <option value='Yard1'>Yard1</option>
          <option value='Yard2'>Yard2</option>
          <option value='Yard3'>Yard3</option>
          <option value='Yard4'>Yard4</option>
          <option value='Yard5'>Yard5</option>
        </select>
        <Link to="/welcome">
          <button type='submit'>Book</button>
        </Link>
      </form>
    </div>
  );
}

export default Appointment;