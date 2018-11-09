import React, { Component } from 'react';

import Routes from './Routes';
import Footer from './share/components/Footer';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
