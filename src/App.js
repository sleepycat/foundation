import React from 'react'
import { Router } from '@reach/router'
import { Home } from './Home'
import { About } from './About'

export const App = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>
)
