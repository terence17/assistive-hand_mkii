import React from "react";
import "./perf.css";
import { GaugeComponent } from "react-gauge-component";

const modelPerformance = {
  Accuracy: 0.62,
  Precision: 0.62,
  Recall: 0.63,
  "F1 Score": 0.62,
};

const Performance = () => {
  return (
    <div className="pcontent">
      <h2 className="text-2xl font-bold text-center mb-6">Performance of the XGBoost model</h2>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(modelPerformance).map(([metric, value]) => (
          <div key={metric} className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">{metric}</h3>
            <GaugeComponent
              arc={{
                subArcs: [
                  { limit: 20, color: "#EA4228", showTick: true },
                  { limit: 40, color: "#F58B19", showTick: true },
                  { limit: 60, color: "#F5CD19", showTick: true },
                  { limit: 100, color: "#5BE12C", showTick: true },
                ],
              }}
              value={value * 100}
            />
            <p className="text-2xl font-bold text-red-600 mt-2">{(value * 100).toFixed(2)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
