import React from 'react';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';

import "./SideNav.css";

import { getCategories } from '../redux/categories/reducer';
export class SideNav extends React.PureComponent {

    render() {
      const { categories } = this.props.categories;

      return (
          <div className="side">
            <h2>Categories</h2>
            <div className="navbar">
              <ul>                  
                {this.renderCategories(categories.items)}
              </ul>
            </div>
          </div>
      );
    }

    componentDidMount() {
      this.props.getCategories();
    }

    ///////////////////////////////////////////////////////////////////////
    //  RENDER METHODS
    ///////////////////////////////////////////////////////////////////////
    renderCategories(categories) {
      return categories.map((category, i) => {
        return (<li key={category.id} onClick={() => this.handleSelectCategory(category.id)}>{category.name}</li>)
      })
    }

    ///////////////////////////////////////////////////////////////////////
    //  EVENT HANDLERS
    ///////////////////////////////////////////////////////////////////////
    handleSelectCategory = (categoryId) => {
      this.props.selectCategory(categoryId)
    }

}

///////////////////////////////////////////////////////////////////////
//  REDUX CONNECTION
///////////////////////////////////////////////////////////////////////
function mapStateToProps(state) {
  const { categories } = state;
  const categoriesToJS = categories.toJS();

  return {
    categories : categoriesToJS,
  };
}

// don't need mapDispatchToProps b/c we are using action creators
export default connect(
  mapStateToProps,
  {
    getCategories,
  }
)(SideNav);