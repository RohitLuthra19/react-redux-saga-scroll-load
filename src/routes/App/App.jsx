import React from 'react';
import { connect } from 'react-redux';

import "./App.css";
import SideNav from '../SideNav/SideNav';
import Main from '../Main/Main';

const App = props => (
  <div className="row">
    <SideNav />
    <div className="main">
      <Main activeCategory={props.categories.activeCategory} />
    </div>
  </div>
);

///////////////////////////////////////////////////////////////////////
//  REDUX CONNECTION
///////////////////////////////////////////////////////////////////////
function mapStateToProps(state) {
  const { categories } = state;
  const categoriesToJS = categories.toJS();

  return {
    categories: categoriesToJS.categories,
  };
}

// don't need mapDispatchToProps b/c we are using action creators
export default connect(mapStateToProps)(App);