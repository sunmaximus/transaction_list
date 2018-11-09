import _ from 'lodash';
import { mockStore } from '../../test/utils/mockStore';
import { SET_CURRENT_USER } from './types';
import { setCurrentUser, logout, login } from './authActions';

const user = {
  authenticationLevel: "user",
  birthDay: "July 9, 1956",
  descriptions: "The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.",
  firstName: "Tom",
  lastName: "Hank",
  password: "123456",
  username: "john",      
}

describe('test authAction.js', () => {
  it('handle setCurrentUser action creator when fail', () => {
    expect(setCurrentUser({})).toEqual({ type: SET_CURRENT_USER, user: {} })
  })

  it('handle setCurrentUser action creator when success', () => {
    expect(setCurrentUser(user)).toEqual({ type: SET_CURRENT_USER, user: user })
  })
})

describe("login", () => {
  it("handles login to server", async () => {
    const store = mockStore();
    await store.dispatch(login({ username: 'john', password: '123456' }));
    const actions = store.getActions();
    const expectUser = {
      type: SET_CURRENT_USER,
      user: { ..._.omit(actions[0].user, ['iat', 'exp']) }
    }
    expect(expectUser).toEqual({ type: SET_CURRENT_USER, user });
  });
});

describe("logout", () => {
  it("handles logout and see if callback is called", async () => {
    const store = mockStore();
    store.dispatch(logout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: SET_CURRENT_USER, user: {} })
  });
});