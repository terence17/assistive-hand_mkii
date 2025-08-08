import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx"; 
import "./Results.css"; 

const MW27 = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetch("/MW34.xlsx") 
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setPredictions(jsonData);
      })
      .catch((error) => console.error("Error loading predictions:", error));
  }, []);

  return (
    <div className="results-container">
      <h3>Matchweek 34 Predictions</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Predicted Result</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((match, index) => (
            <tr key={index}>
              <td>{match.HomeTeam}</td>
              <td>{match.AwayTeam}</td>
              <td>{match.PredictedResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MW27;
