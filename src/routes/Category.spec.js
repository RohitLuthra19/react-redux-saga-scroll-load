import React from 'react';
import Category from './Category';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import { mount } from 'enzyme';

describe('Category renders',() => {
  it('Category component created', () => {
    const rendered = renderer.create(
      <Category store={store} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })

  it('find more button', () => {
    const wrapper = mount(<Category store={store}/>);
    const text = wrapper.find('button').text();
    expect(text).toEqual('More');
  });
})