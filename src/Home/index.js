import React from 'react';

import NavBar from '../share/components/NavBar';
import HomeContainer from './containers/HomeContainer';

const Home = () => {
  return (
    <div>
      <NavBar hasBackground={false} />
      <HomeContainer />
    </div>
  )
}

export default Home;