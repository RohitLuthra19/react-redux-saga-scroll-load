import React from 'react';
import Dashboard from './Dashboard';
import '../setupTests';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import { Provider } from "react-redux";

describe("Dashboard Component", () => {
  it("should render without throwing an error", () => {
    const rendered = renderer.create(
      <Provider store={store}>
          <Dashboard />
      </Provider>
    )
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});