import React from 'react'
import { Router, Link } from "@reach/router"

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="app">Home</Link>{" "}
      <Link to="dashboard">Dashboard</Link>
      <Router>
        <Home path="/app" message="Hi! Welcome"/>
        <Dashboard path="/dashboard" message="This is your dashboard"/>
      </Router>
    </nav>
  </div>
);

const Home = ({message}) => (
  <div>
    <h2>{message} Home</h2>
  </div>
);

const Dashboard = ({message}) => (
  <div>
    <h2>{message}</h2>
  </div>
);

export default App
