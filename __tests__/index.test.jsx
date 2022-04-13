import React from 'react'
import { render, screen } from '@testing-library/react'
import { ApolloProvider } from "@apollo/client";
import client from '../graphQL/client';
import Home from '../pages/index'

test("Renders Home Page", async () => {
  render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
  const heading = screen.getByRole('navigation')

  expect(heading).toBeInTheDocument()
})
