import React from 'react';
import Dashboard from './Dashboard';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';

describe('Dashboard renders',() => {

  it('Dashboard component created', () => {
    const rendered = renderer.create(
      <Dashboard store={store} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })
})