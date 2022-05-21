import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../../constants";
import styled from "styled-components";
import { covertNumToStars } from "../../components/CustomCard";
import { Button } from "@mui/material";

const StyledCard = styled(Card)`
  box-shadow: none;
`;

const StyledCardContent = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: column;

  > div h2 {
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > div {
      max-width: 60%;
    }
    > div p {
      margin: 15px 0;
    }
    > div h3 {
      margin-top: 10px;
    }
  }
`;

const StyledMedia = styled(CardMedia)`
  width: auto;
  margin: auto;
  max-width: 240px;
`;

const ImagesList = styled.div`
  display: flex;
  margin-top: 10px;
  img {
    width: 65px;
    height: 65px;
    padding: 7px;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 100%;
    background-color: #ddd;
  }
`;

const SizesList = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: center;
`;

const StyledSize = styled(Typography)`
  width: 50px;
  height: 50px;
  padding: 5px;
  display: flex;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 100%;
  align-items: center;
  background-color: #ddd;
  justify-content: center;
  ${({ isselected }) => isselected && "background-color: #333; color: #ddd;"}
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  margin-top: 20px;
  padding: 5px 30px;
  border-radius: 20px;
  background-color: #ea1d62;
  &:hover {
    background-color: #c8114e;
  }
`;

export const SingleProCard = ({
  image,
  product,
  selectedSize,
  updateCurrentSize,
  updateCurrentImage,
}) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledMedia
          component="img"
          image={`${BASE_URL}${image.url}`}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {product.title}
          </Typography>
          <Typography variant="h5" component="h3">
            {product.rating && covertNumToStars(product.rating)}
          </Typography>
          <Typography variant="h4" component="h3">
            £{product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.description}
          </Typography>
          <ImagesList>
            {product.images
              ? product.images.map((image) => (
                  <img
                    key={image.name}
                    alt={product.title}
                    src={`${BASE_URL}${image.url}`}
                    onClick={() => updateCurrentImage(image)}
                  />
                ))
              : null}
          </ImagesList>
          <SizesList>
            {product.sizes
              ? product.sizes.map((size) => (
                  <StyledSize
                    variant="h5"
                    component="h3"
                    key={size.id}
                    onClick={() => updateCurrentSize(size)}
                    isselected={
                      size.name === selectedSize.name ? size.name : ""
                    }
                  >
                    {size.name}
                  </StyledSize>
                ))
              : null}
          </SizesList>
          <StyledButton variant="contained">Add to chart</StyledButton>
        </CardContent>
      </StyledCardContent>
    </StyledCard>
  );
};
