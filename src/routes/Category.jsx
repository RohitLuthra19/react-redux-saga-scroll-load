import React from 'react';
import { connect } from 'react-redux';

import "./Category.css";

import { getSingleCategory } from '../redux/categories/reducer';

export class Category extends React.PureComponent {
    render() {
      const { categories } = this.props.categories;

      return (
          <div className="main">
              <div className="wrapper">
                {this.renderImages(categories.images)}
              </div>
              <div className="btn_wrapper">
                <button className="btn_more" onClick={this.handleMoreClick}>
                  More
                </button>
              </div>
          </div>
      );
    }

    componentDidMount() {
      const { activeCategory } = this.props;
      const { limit, page } = this.props.categories.categories;
      this.props.getSingleCategory(activeCategory, limit, page);
    }

    componentDidUpdate(prevProps: Props) {
      const { limit, page } = this.props.categories.categories;
      if(prevProps.activeCategory !== this.props.activeCategory) {
        this.props.getSingleCategory(this.props.activeCategory, limit, page);
      }
    }

    ///////////////////////////////////////////////////////////////////////
    //  RENDER METHODS
    ///////////////////////////////////////////////////////////////////////
    renderImages(images) {
      return images.map((item, i) => {
        return (<img key={item.id} src={item.url} width={400} height={400} alt={item.id} className="img"></img>)
      })
    }

    ///////////////////////////////////////////////////////////////////////
    //  EVENT HANDLERS
    ///////////////////////////////////////////////////////////////////////
    handleMoreClick = () => {
      const { activeCategory } = this.props;
      const { limit, page } = this.props.categories.categories;
      this.props.getSingleCategory(activeCategory, limit, page);
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
    getSingleCategory,
  }
)(Category);