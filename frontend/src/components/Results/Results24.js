import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./Results.css";

const Results24 = () => {
  const [data, setData] = useState([]);
  const [selectedMatchweek, setSelectedMatchweek] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/predictionsredo (1).xlsx") 
      .then((response) => response.arrayBuffer()) 
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0]; 
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet); 
        setData(jsonData);
      })
      .catch((error) => console.error("Error loading Excel file:", error));
  }, []);


  const matchweeks = [...new Set(data.map((row) => row.Matchweek))].sort();


  const filteredData = selectedMatchweek
    ? data.filter((row) => row.Matchweek === selectedMatchweek)
    : [];

  return (
    <div className="results-container">
      <h2>The results of the model predictions (Feb - May 2024)</h2>

      <div className="matchweek-links">
        {matchweeks.map((week, index) => (
          <button
            key={index}
            className={`matchweek-btn ${selectedMatchweek === week ? "active" : ""}`}
            onClick={() => setSelectedMatchweek(week)}
          >
            {week}
          </button>
        ))}

        <button className="exit-btn" onClick={() => navigate("/Directory")}>
          Return to list of seasons
        </button>

      </div>
      


      {selectedMatchweek && (
        <div>
          <h3> {selectedMatchweek}</h3>
          <table className="results-table">
            <thead>
              <tr>
                {filteredData.length > 0 &&
                  Object.keys(filteredData[0]).map((key) => <th key={key}>{key}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((value, j) => (
                    <td key={j}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Results24;
