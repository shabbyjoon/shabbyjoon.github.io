import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Links from './Links.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <Links />
      </div>
    );
  }
}

export default App;
