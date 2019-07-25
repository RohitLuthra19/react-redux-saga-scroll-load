import React from 'react';
import SideNav from './SideNav';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';

describe('SideNav renders',() => {
  it('SideNav component created', () => {
    const rendered = renderer.create(
      <SideNav store={store} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })
})