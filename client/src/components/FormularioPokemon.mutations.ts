import { gql, useMutation } from '@apollo/client';

export const ADD_POKEMON = gql`
  mutation AddPokemon($name: String, $image: String) {
    addPokemon(pokemon: {name: $name, image: $image}) {
      name
      image
    }
  }
`;

