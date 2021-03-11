import React from 'react';
import { Link } from 'react-router-dom';
import './NeedATourGuide.css';

export default function NeedATourGuid() {
  return (
    <div className="need-tour-guide-container">
      <h1>Need a Tour Guide?</h1>
      <div className="buttonContainer">
        <Link to="/tour-guide">
          <button className="takeButton">Take me there</button>
        </Link>
      </div>
    </div>
  );
}
