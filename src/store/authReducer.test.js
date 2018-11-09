import authReducer from './authReducer';
import { SET_CURRENT_USER } from '../auth/types';

test('Test Auth reducer', () => {
  let defaultState = {
    isAuthenticated: false,
    user: {}
  }

  expect(authReducer(defaultState, {})).toEqual(defaultState)

  let resultState = {
    isAuthenticated: true,
    user: {
      authenticationLevel: "user",
      birthDay: "July 9, 1956",
      descriptions: "The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
      exp: "1540705732",
      firstName: "Tom",
      iat: "1540702132",
      lastName: "Hank",
      password: "123456",
      username: "john",      
    }
  }

  let action = { type: SET_CURRENT_USER, user: { ...resultState.user }}
  expect(authReducer(defaultState, action)).toEqual(resultState)

  action = { type: SET_CURRENT_USER, user: {}}
  expect(authReducer(defaultState, action)).toEqual(defaultState)

})

 
 
  