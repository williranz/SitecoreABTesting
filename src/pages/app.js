import React from 'react';
import { Router } from "@reach/router"
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Home path="/home" />
        <About path="/about" />
        <Contact path="/contact" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}
export default App
