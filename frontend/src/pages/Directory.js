import React from "react";
import { Link } from "react-router-dom";
import './Directory.css';

const Seasons = () => {
  
  const seasons = ["2024-25", "2023-24"];

  return (
    <div className="seasons-container">
      <h2 className="text-xl font-bold mb-4">Select a Season</h2>
      <ul className="season-list">
        {seasons.map((season, index) => (
          <li key={index}>
            <Link to={`/PastMatches/${season}`} className="season-link">
              {season}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
