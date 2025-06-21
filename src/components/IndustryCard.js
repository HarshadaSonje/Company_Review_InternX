import React from 'react';

function IndustryCard({ name, icon }) {
  return (
    <div className="industry-card">
      <div className="icon">{icon}</div>
      <div className="industry-name">{name}</div>
    </div>
  );
}

export default IndustryCard;
