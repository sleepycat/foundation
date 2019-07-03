import { App } from '../App'

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import 'jest-dom/extend-expect'


afterEach(cleanup)

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {},
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}

test('full app rendering/navigating', async () => {
  const {
    container,
    history: { navigate },
  } = renderWithRouter(<App />)
  const appContainer = container
  expect(appContainer.innerHTML).toMatch('Hello world')

  await navigate('/about')
  expect(container.innerHTML).toMatch('About')
})

test('landing on a bad page', () => {
  const { container } = renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  })
  expect(container.innerHTML).toMatch('No match')
})
