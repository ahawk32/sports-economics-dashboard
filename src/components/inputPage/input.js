import React, { useState } from 'react';
import axios from 'axios';
import './input.css'; // Ensure the path is correct

function TripleInputComponent({ onAdd }) {
  const [inputValues, setInputValues] = useState({
    eventName: '',
    economicImpact: '',
    visitors: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValues);
    setInputValues({ eventName: '', economicImpact: '', visitors: '' }); // Reset form
  };

  return (
    <div className="triple-input-component">
      <h2 className="form-title">Add New Economic Impact</h2> {/* Title added here */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={inputValues.eventName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="economicImpact">Economic Impact ($):</label>
          <input
            type="number"
            id="economicImpact"
            name="economicImpact"
            value={inputValues.economicImpact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="visitors">Visitors:</label>
          <input
            type="number"
            id="visitors"
            name="visitors"
            value={inputValues.visitors}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Impact</button>
      </form>
    </div>
  );
}

export default TripleInputComponent;
