import React from "react";
import "./InfoSection.css";

export default function InfoSection() {
  return ( <>
    <div className="free-case-card">
      <div className="left-panel">
        <div className="left-content">
          <h1>Free<br />Case<br />Review</h1>
          <ul className="benefits-list">
            <li><span className="icon lock">🔒</span>100% Confidential</li>
            <li><span className="icon check">✅</span>No Win, No Fee</li>
            <li><span className="icon forms">📝</span>Free Case Evaluation</li>
          </ul>
        </div>
      </div>

      {/* Circle Overlay Container */}
      <div className="circle-container">
        <svg viewBox="0 0 200 200" className="slot-svg">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5E4C8D" />
              <stop offset="100%" stopColor="#2D2056" />
            </radialGradient>           
          </defs>
            <path
              id="circlePath"
              d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            />
          <circle cx="100" cy="100" r="75" fill="url(#grad)" />
          <text fill="white" fontSize="16" fontWeight="bold" letterSpacing="2px">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              ONLY 6 SLOTS LEFT
            </textPath>
          </text>
        </svg>
      </div>

      <div className="right-panel">
        <p>We are here<br />to help!</p>
        <button className="contact-button">
          Contact us <span>➔</span>
        </button>
      </div>
    </div>
   <br/>
   </>
  );
}