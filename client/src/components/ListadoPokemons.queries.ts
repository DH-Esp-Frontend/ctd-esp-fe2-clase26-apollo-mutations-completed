import {gql} from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons {
      name
      image
    }
  }
`;