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
