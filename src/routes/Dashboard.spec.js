import React from 'react';
import Dashboard from './Dashboard';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import { Provider } from "react-redux";
import { shallow, mount } from 'enzyme';

describe("Dashboard Component", () => {
  it('renders', () => {
    const wrapper = shallow(<Dashboard store={store} />);
    expect(wrapper.exists()).toBe(true);
  })

  it("should render without throwing an error", () => {
    const rendered = renderer.create(
      <Provider store={store}>
          <Dashboard />
      </Provider>
    )
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});