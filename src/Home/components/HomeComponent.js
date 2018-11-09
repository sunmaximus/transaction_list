import React, { Component } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/home.scss'
class HomeComponent extends Component {
  test() {
    let token = localStorage.getItem('jwtToken')

    console.log(token)
    axios.post('http://localhost:5000/api/posts',
    {
      token
    })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className='home__container'>
        Test Home

        <button onClick={() => this.test()}>Test</button>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  user: PropTypes.object.isRequired
};

export default HomeComponent;