import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './error.scss';

const Error = withRouter(({ history }) => (
  <div className='error__container'>
    <h1>Error 404</h1>
      <Button
        onClick={() => history.push("/")}
      >
        Home
      </Button>
  </div>
));

export default Error;