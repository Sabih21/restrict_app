import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';

const FrequencyForm = () => {
  const [name, setName] = useState('');
  const [interval_days, setIntervalDays] = useState('');
  const [trigger_days, setTriggerDays] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newFrequency = { name, interval_days, trigger_days, status };
      const response = await axios.post('http://localhost:3000/frequency', newFrequency);
      setSuccess('New frequency created successfully');
      setName('');
      setIntervalDays('');
      setTriggerDays('');
      setStatus('');
      setError('');
    } catch (err) {
      setError('Error creating new frequency.');
      setSuccess('');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="container mt-5">
          <h2>Add New Frequency</h2>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Frequency Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="interval_days" className="form-label">Interval (in days)</label>
              <input
                type="number"
                id="interval_days"
                className="form-control"
                value={interval_days}
                onChange={(e) => setIntervalDays(e.target.value)}
                required
                min="1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="trigger_days" className="form-label">Trigger Days</label>
              <input
                type="number"
                id="trigger_days"
                className="form-control"
                value={trigger_days}
                onChange={(e) => setTriggerDays(e.target.value)}
                required
                min="1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrequencyForm;
