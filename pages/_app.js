import '../styles/globals.css'
import client from '../graphQL/client'
import { ApolloProvider } from "@apollo/client";
import Header from '../components/organism/header';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
