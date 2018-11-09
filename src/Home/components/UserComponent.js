import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import '../styles/home.scss';

class UserComponent extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    birthDay: this.props.user.birthDay,
    descriptions: this.props.user.descriptions,
  }

  render() {
    const { firstName, lastName, birthDay, descriptions, edit } = this.state;
    if (edit) {
      return (
        <div className='home__container'>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
              <Card.Meta>
                <input
                  className='home__edit-text'
                  value={birthDay}
                  onChange={(event) => this.setState({ birthDay: event.target.value })}
                />
              </Card.Meta>
              <textarea
                className='home__edit-textarea'
                value={descriptions} maxLength="300"
                onChange={(event) => this.setState({ descriptions: event.target.value })}
              />
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.setState(prevState => ({ edit: !prevState.edit }))}>complete edit</Button>
            </Card.Content>
          </Card>
        </div>
      );
    }

    return (
      <div className='home__container'>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
            <Card.Meta>
              <span className='date'>{birthDay}</span>
            </Card.Meta>
            <Card.Description>{descriptions}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => this.setState(prevState => ({ edit: !prevState.edit }))}>Edit</Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

UserComponent.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserComponent;