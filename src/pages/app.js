import React from 'react';
import { Router } from "@reach/router"
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';

const App = () => {
  return (
    <Router basepath="/app">
      <Home path="/home" />
      <About path="/about" />
      <Contact path="/contact" />
    </Router>
  )
}
export default App
