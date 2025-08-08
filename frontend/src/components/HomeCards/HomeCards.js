import React from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid2 } from "@mui/material";

const cardsrendered = [
  {
    title: "Assistive Hand ",
    description: "This model bases its predictions on the opinions of the fanbases leding up to a match as well the team perfomance metrics. We continue to give you key insights in your sports investment journey. ",
    image: "images/hand2.jpg",
  },
  {
    title: "League in focus",
    description: "For this study, only the 20 teams of the premier league in the 24/25 season would be used. Lets get to work and bring home grand audits in the last weeks of the season. Many shall deposit, but few will withdraw.",
    image: "images/epllogo.jpg",
  },
  
];

const CardComponent = () => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {cardsrendered.map((card, index) => (
        <Grid2 item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={card.title} height="180" image={card.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
            </CardContent>
            
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardComponent;
