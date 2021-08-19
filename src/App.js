import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/Quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
