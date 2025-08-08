import React from "react";
import { Container } from "@mui/material";
import CardComponent from "./HomeCards/HomeCards";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

export default function Homepage() {
  return (
    <>
      <br />
      <div className="hero-section">
        <img src="/images/title.jpg" className="hero-bg" alt="EPL Title" />
          <h1>Assistive Hand</h1>
          <p>An AI-driven predictive software integrating sentiment analysis for football results</p>
          <a href="/predictions" className="btn">See some tips</a>
        </div>
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
        

        <div className="slider">
          <HomeCarousel />
        </div>

        <div className="card-section">
          <CardComponent />
        </div>
      </Container>
    </>
  );
}
