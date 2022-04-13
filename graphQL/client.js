import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      console.log(`Graphql error: ${message}, location: ${location}, path: ${path}`)
    })
  } else if (networkError){
    console.log("network Error:", networkError)
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    fetch,
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default client