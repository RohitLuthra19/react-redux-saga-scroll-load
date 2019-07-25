import React from 'react';
import Category from './Category';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';

describe('Category renders',() => {
  it('Category component created', () => {
    const rendered = renderer.create(
      <Category store={store} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })
})