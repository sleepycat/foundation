import React from 'react'
import { Router, Link } from '@reach/router'
import { Home } from './Home'
import { About } from './About'
import { NoMatch } from './NoMatch'

export const App = () => (
  <main>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <NoMatch default />
    </Router>
  </main>
)
