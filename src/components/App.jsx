import React from 'react';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Links from './Links.jsx';
import Header from './Header.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render () {
    return (
      <Router>
      <div className="container">
        <nav className="row">
          <Link className="pl-2" to="/">Home</Link>
          <Link className="pl-2" to="/work">Work</Link>
          <Link className="pl-2" to="/links">Links</Link>
        </nav>

        <div>
          <Switch>
            <Route path="/work">
              {/* <About /> */}
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );

    
  }

}


export default App;

function Home() {
  return <Homepage />;
}


