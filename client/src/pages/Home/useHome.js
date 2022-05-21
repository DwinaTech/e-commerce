import React from "react";

export const useHome = () => {
  const dataFlattener = (data) => {
    return data
      ? data.products.data.reduce((acc, value) => {
          return [
            ...acc,
            {
              id: value.id,
              ...value.attributes,
              images: value.attributes.images.data.reduce(
                (newAcc, newValue) => [
                  ...newAcc,
                  { id: newValue.id, ...newValue.attributes },
                ],
                []
              ),
              sizes: value.attributes.sizes.data.reduce(
                (sizeAcc, size) => [
                  ...sizeAcc,
                  { id: size.id, ...size.attributes },
                ],
                []
              ),
            },
          ];
        }, [])
      : [];
  };

  return { dataFlattener };
};
