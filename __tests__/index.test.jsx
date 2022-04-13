import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test("Renders Home Page", async () => {
  render(<Home />)
  const heading = screen.getByRole('navigation')

  expect(heading).toBeInTheDocument()
})
