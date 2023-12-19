import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./helper.js";
import "./Payment.css"; 
function Payment({ obj }) {
  const loggedInEmail = obj.email;
  const dropdownRef = useRef(null);
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [allowBatchChange, setAllowBatchChange] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [batchPreference, setBatchPreference] = useState("");
  const batchOptions = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];
  const navigate=useNavigate();
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function fetchDate() {
      try {
        // Fetch enrollment date
        const response = await axios.get(
          `${BASE_URL}/api/fetchdate/enrollment-date/${encodeURIComponent(loggedInEmail)}`
        );
        setEnrollmentDate(response.data.enrollmentDate);

        // Calculate the difference between enrollment date and current date
        const today = new Date();
        const diffInMilliseconds =
          today - new Date(response.data.enrollmentDate);
        const daysDifference = diffInMilliseconds / (1000 * 60 * 60 * 24); // Convert milliseconds to days

        // Check if the difference is greater than 30 days
        if (daysDifference > 30) {
          setAllowBatchChange(true);
        }
      } catch (error) {
        console.error("Error fetching date:", error);
      }
    }

    fetchDate();
  }, [loggedInEmail]);

  
    const handlePayment = async () => {
      try {

    
        // Update enrollment date to current date
        const currentDate = new Date().toISOString();
        setEnrollmentDate(currentDate);
    
        // Update enrollment date in the database
        const res=await axios.put(`${BASE_URL}/api/update-enrollment/${encodeURIComponent(loggedInEmail)}`, {
          enrollmentDate: currentDate,
        });
    
        // Update batch preference in the database
        await axios.put(`${BASE_URL}/api/update-batch/${encodeURIComponent(loggedInEmail)}`, {
          batchPreference,
        });
    
        console.log(res);
      } catch (error) {
        console.error('Error processing payment:', error);
      }

      navigate("/paymentres");
    };
    

  const handleBatchChange = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="payment-page">
      <div className="button-container">
        {allowBatchChange && (
          <button className="change-batch-button" onClick={handleBatchChange}>
            Change Batch Preference
          </button>
        )}

        {showDropdown && (
          <div className="dropdown" ref={dropdownRef}>
            <select
              value={batchPreference}
              onChange={(e) => setBatchPreference(e.target.value)}
            >
              <option value="">Select Batch Preference</option>
              {batchOptions.map((batch, index) => (
                <option key={index} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="payment-card">
        <h2>Payment </h2>
        <div className="payment-details">
          <div className="amount-section">
            <p className="amount-text">Amount:</p>
            <span className="amount-value">Rs.500</span>
          </div>
          <button className="payment-button" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;







