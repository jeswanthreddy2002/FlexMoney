
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { BASE_URL } from './helper.js';
import "./Home.css";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [invalidAge, setInvalidAge] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    batchPreference: '6-7AM',
  });
 const navigate= useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const ageValue = parseInt(formData.age, 10);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 65) {
      setInvalidAge(true); 
      return; 
    }



    try {
      setLoading(true);
      const response= await axios.post(`${BASE_URL}/api/pay`, {
        Name: formData.name,
        Age: formData.age,
        Email: formData.email,
        BatchPreference: formData.batchPreference
      });
      navigate("/payment",{ state: { response: response.data } });
    }
    catch(error)
    {
      console.error(error);
    }



   
  };

  return (
    <div className='upload-form'>
      <h2>Yoga Class Admission Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='label'>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        </div>
        <br />
        <div className="form-group">
        <label className='label'>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          {invalidAge && (
              <span className="alert-message">Age must be between 18 and 65.</span>
            )}
        </label>
        </div>
        <br />
        <div className="form-group">
        <label className='label'>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        </label>
        </div>
        <br />
        <div className="form-group">
        <label className='label'>
          Batch Preference:
          <select name="batchPreference" value={formData.batchPreference} onChange={handleChange}>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        </div>
        <br />
        <div className="button-container">
        <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Enroll</button>
        
        </div>
      </form>
      {
        loading && <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      }
    </div>
  );
};

export default Home;
