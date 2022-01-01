import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategoriesWithFoods = async () => {
  const query = gql`
    query GetCategoriesWithFoods {
      categoriesConnection {
        edges {
          node {
            id
            title
            titleKr
            foods {
              id
              title
              titleKr
              price
              spicy
              veg
              image {
                url
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categoriesConnection.edges;
};

export const getMainImages = async () => {
  const query = gql`
    query GetMainImages {
      mainImages(orderBy: order_ASC) {
        id
        image {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.mainImages;
};

export const getSpecialsImages = async () => {
  const query = gql`
    query GetSpecialsImages {
      foods(where: { category: { title: "Specials" } }, first: 4) {
        id
        image {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.foods;
};

export const getMoments = async () => {
  const query = gql`
    query getMoments {
      moments {
        id
        caption
        image {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.moments;
};
