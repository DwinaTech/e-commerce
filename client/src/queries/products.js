import { gql } from "@apollo/client";

export const getProducts = gql`
  query getProducts {
    products {
      data {
        id
        attributes {
          title
          size
          price
          colour
          rating
          quantity
          sizes {
            data {
              id
              attributes {
                name
              }
            }
          }
          images {
            data {
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;
