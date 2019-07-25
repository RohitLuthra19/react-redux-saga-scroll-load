import React from 'react';
import { connect } from 'react-redux';

import "./Dashboard.css";
import SideNav from './SideNav';
import Category from './Category';

const Dashboard = props => (
  <div className="row">
    <SideNav />
    <div className="main">
      <Category activeCategory={props.categories.activeCategory} />
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
export default connect(
  mapStateToProps,
  {
  }
)(Dashboard);