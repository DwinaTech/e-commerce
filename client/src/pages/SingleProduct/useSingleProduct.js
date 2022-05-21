import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT } from "../../queries/products";

export const useSingleProduct = () => {
  const [image, setImage] = useState({});
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const { id } = useParams();
  const { loading, data } = useQuery(PRODUCT, {
    variables: { id },
  });

  const productFlattener = (data) => {
    const pro = data.product.data;
    return {
      id: pro.id,
      ...pro.attributes,
      images: pro.attributes.images.data.reduce(
        (newAcc, newValue) => [
          ...newAcc,
          { id: newValue.id, ...newValue.attributes },
        ],
        []
      ),
      sizes: pro.attributes.sizes.data.reduce(
        (sizeAcc, size) => [...sizeAcc, { id: size.id, ...size.attributes }],
        []
      ),
    };
  };

  useEffect(() => {
    if (data) {
      setProduct(productFlattener(data));
    }
  }, [data]);

  useEffect(() => {
    if (!image.url && product.id) {
      const defaultImage = product.images.find(
        (image) => image.name === product.colour
      );
      setImage(defaultImage);
    }
  }, [image, product]);

  useEffect(() => {
    if (!selectedSize.name && product.id) {
      const size = product.sizes.find((size) => size.name === product.size);
      setSelectedSize(size);
    }
  }, [selectedSize, product]);

  const updateCurrentImage = (currentImg) => {
    setImage(currentImg);
  };

  const updateCurrentSize = (currentSize) => {
    setSelectedSize(currentSize);
  };

  return {
    image,
    product,
    loading,
    selectedSize,
    updateCurrentSize,
    updateCurrentImage,
  };
};
