import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledMedia = styled(CardMedia)`
  width: auto;
  margin: auto;
  max-width: 100%;
`;

const covertNumToStars = (num) => {
  return Array.from(Array(Math.round(num))).map((index, idx) => (
    <span key={idx}>⭐</span>
  ));
};

export const CustomCard = ({ product }) => (
  <Card sx={{ maxWidth: 345, textAlign: "center" }}>
    <CardActionArea>
      <StyledMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <StyledTitle component="h3">{product.title}</StyledTitle>
        <StyledTitle component="h3">
          {covertNumToStars(product.rating.rate)}
        </StyledTitle>
        <StyledTitle component="h3">£ {product.price}</StyledTitle>
      </CardContent>
    </CardActionArea>
  </Card>
);
