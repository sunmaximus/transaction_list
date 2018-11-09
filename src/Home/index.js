import React from 'react';

import NavBar from '../share/components/NavBar';
import HomePage from './components/HomePage';

const Home = () => {
  return (
    <div>
      <NavBar hasBackground={false} />
      <HomePage />
    </div>
  )
}

export default Home;