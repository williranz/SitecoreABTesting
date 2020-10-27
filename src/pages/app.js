import React from 'react';
import { Router } from "@reach/router"
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

const App = () => {
  return (
    <Router basepath="/app">
      <Home path="/Home" />
      <About path="/About" />
      <Contact path="/Contact" />
    </Router>
  )
}
export default App
