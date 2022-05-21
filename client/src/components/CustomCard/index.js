import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { BASE_URL } from "../../constants";

const StyledTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCardActionArea = styled(CardActionArea)`
  padding-top: 20px;
`;

const StyledMedia = styled(CardMedia)`
  width: auto;
  margin: auto;
  max-width: 100%;
`;

export const covertNumToStars = (num) => {
  return Array.from(Array(Math.round(num))).map((_, idx) => (
    <span key={idx}>⭐</span>
  ));
};

export const CustomCard = ({ product }) => {
  const navigate = useNavigate();
  const defaultImage = product.images.find(
    (image) => image.name === product.colour
  );
  const url = defaultImage ? `${BASE_URL}${defaultImage.url}` : "";

  return (
    <Card
      sx={{ maxWidth: 345, textAlign: "center" }}
      onClick={() => {
        navigate(`/single-product/${product.id}`);
      }}
    >
      <StyledCardActionArea>
        <StyledMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <StyledTitle component="h3">{product.title}</StyledTitle>
          <StyledTitle component="h3">
            {covertNumToStars(product.rating)}
          </StyledTitle>
          <StyledTitle component="h3">£ {product.price}</StyledTitle>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
};
