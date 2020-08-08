import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';

class Homepage extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <About />
      </div>
    );
  }

}

export default Homepage;
