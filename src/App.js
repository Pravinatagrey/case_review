import './App.css';
import React from "react";

import ClaimForm from "./components/ClaimForm";
import InfoSection from "./components/InfoSection";
import Banner from "./components/Banner";
function App() {
  return (
     <div className="app-background">
      <div className="container">
        <div className="left-column">
          <InfoSection />
         
          <Banner />
        </div>
        <div className="right-column">
          <ClaimForm />
        </div>
      </div>
    </div>
  );
}

export default App;
