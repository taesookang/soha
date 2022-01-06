import { request, gql } from "graphql-request";
import { useEffect } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategoriesWithFoods = async () => {
  const query = gql`
    query GetCategoriesWithFoods {
      categoriesConnection(orderBy: order_ASC) {
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
        title
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

export const getEvents = async () => {
  const query = gql`
    query GetEvents {
      events {
        id
        title
        startDate
        endDate
        description {
          raw
        }
        image {
          url
        }
        link
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.events;
};

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};