import React from "react";
import "./ClaimForm.css";

export default function ClaimForm() {
  return (
    <div className="claim-form-container">
      <form className="claim-form">
        <h2>Claim Form</h2>
        <div className="form-grid">
          <div className="form-group">
            <input type="text" placeholder="Enter first name*" required/>
          </div>
          <div className="form-group">
         
            <input type="text" placeholder="Enter last name*" required />
          </div>
          <div className="form-group">
           
            <input type="tel" placeholder="Enter phone number*" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Enter email*" required />
          </div>
          <div className="form-group icon-input">
            <input type="date" placeholder="Date of birth*" required/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Enter job title*" required />
          </div>
          <div className="form-group icon-input">
            <input type="date" placeholder="Date of Diagnosis*" required/>
          </div>
          <div className="form-group">
            <select  >
              <option value="">Type of Diagnosis *</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Tell us your story (optional)</label>
          <textarea placeholder="Write here..." rows="3"></textarea>
        </div>

        <div className="checkbox-group">
    
            
           <p><input type="checkbox" /> I agree to the <a href="#">privacy policy</a> and <a href="#">disclaimer</a> and give my express written
            consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing
            equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.</p>
        
        </div>

        <div className="checkbox-group">
          <p>
            <input type="checkbox" />
            Please check this box to verify you're a person.
          </p>
        </div>

        <button type="submit" className="submit-button">
          Start your claim now
        </button>
      </form>
    </div>
  );
}
