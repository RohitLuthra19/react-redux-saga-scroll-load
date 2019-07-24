import React from 'react';

import "./Dashboard.css";
import SideNav from './SideNav';
import Category from './Category';

export default class Dashboard extends React.PureComponent {

    state= {
      activeCategory: -1,
    }
    render() {

        const { activeCategory } = this.state;

        return (
          <div className="row">
              <SideNav selectCategory={(activeCategory)=> this.handleSelectCategory(activeCategory)}/>
              <div className="main">
                <Category activeCategory={activeCategory}/>
              </div>
          </div>
        );
    }

    ///////////////////////////////////////////////////////////////////////
    //  EVENT HANDLERS
    ///////////////////////////////////////////////////////////////////////
    handleSelectCategory(activeCategory) {
      this.setState({ activeCategory });
    }
}
