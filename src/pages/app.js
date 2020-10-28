import React from 'react'
import { Router, Link } from "@reach/router"

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="app">Home</Link>{" "}
      <Link to="app/dashboard">Dashboard</Link> {" "}
      <Link to="app/invoices/123">Invoice 123</Link>{" "}
      <Link to="app/invoices/abc">Invoice ABC</Link>
      <Router>
        <Home path="app" message="Hi! Welcome"/>
        <Dashboard path="app/dashboard" message="This is your dashboard"/>
        <Invoice path="app/invoices/:invoiceId" />
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

const Invoice = (props) => (
  <div>
    <h2>Invoice {props.invoiceId}</h2>
  </div>
);

export default App
