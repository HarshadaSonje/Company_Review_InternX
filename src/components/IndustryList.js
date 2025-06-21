import React from 'react';
import IndustryCard from './IndustryCard';

const industries = [
  { name: "Aerospace & Defense", icon: "🛩️" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Arts, Entertainment & Recreation", icon: "🎨" },
  { name: "Construction, Repair & Maintenance Services", icon: "🛠️" },
  { name: "Education", icon: "🎓" },
  { name: "Energy, Mining & Utilities", icon: "⚡" },
];

function IndustryList() {
  return (
    <div className="industry-list">
      <h2>Browse companies by industry</h2>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <IndustryCard key={index} name={industry.name} icon={industry.icon} />
        ))}
      </div>
    </div>
  );
}

export default IndustryList;
