import { gql } from "@apollo/client";

export const PRODUCTS = gql`
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

export const PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          title
          size
          price
          colour
          rating
          description
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
