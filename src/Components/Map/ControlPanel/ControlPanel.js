import React from 'react';
import './ControlPanel.css';

export default function ControlPanel({ onSelectCity }) {
  return (
    <div className="control-panel" onClick={() => onSelectCity()}>
      Reset Default
    </div>
  );
}
