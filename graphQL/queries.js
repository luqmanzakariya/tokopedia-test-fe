import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
        id
      }
    }
  }
`

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      types {
        slot
        type {
          name
        }
      }
      sprites {
        back_default
        back_shiny
        front_default
        front_shiny
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`