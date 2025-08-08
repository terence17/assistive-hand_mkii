import React from "react";
import Results24 from "../components/Results/Results24";
import Results25 from "../components/Results/Results25";
import { useParams } from "react-router-dom";

const PastMatches = () => {
  const { season } = useParams(); // Get season from the URL

  // Map season to the correct component
  const seasonComponents = {
      "2023-24": <Results24 />,
      "2024-25": <Results25 />,
  };

  return (
      <>
          {seasonComponents[season] || <p>Season data not found</p>}
      </>
  );
};
export default PastMatches;
