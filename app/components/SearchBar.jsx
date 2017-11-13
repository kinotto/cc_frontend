import React, {Component} from 'react';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  FilterIdeasRequest,
  FetchCategoriesRequest,
  FilterIdeasByCategoryRequest
} from '../actions';
import {STAGE} from '../utilities/constants';

class SearchBar extends Component {
  constructor() {
    super();
    this.addRemoveFilter = this.addRemoveFilter.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.state = {
      'showFilterModal': false,
      'filters': {
        'categories': [],
        'stages': []
      }
    };
  }
  componentWillMount() {
    this.props.FetchCategoriesRequest();
  }
  componentDidMount() {
    Observable.fromEvent(this.input, 'keyup')
      .debounceTime(200)
      .filter(evt => evt.keyCode === 13)
      .subscribe(this.props.FilterIdeasRequest);
  }

  applyFilters() {
    this.props.FilterIdeasByCategoryRequest(this.state.filters);
    this.setState({'showFilterModal': false});
  }
  clearFilters() {
    this.setState({
      'filters': {
        'categories': [],
        'stages': []
      }
    });
  }

  // add or remove stage/category from the list of filters for a subsequent search
  addRemoveFilter(filter) {
    let FILTER_TYPE;
    if (filter.categoryCode) {
      // is a category
      FILTER_TYPE = 'categories';
    } else {
      // is a stage
      FILTER_TYPE = 'stages';
    }

    let indexOfFilter = this.state.filters[FILTER_TYPE].indexOf(filter);
    if (indexOfFilter === -1) {
      // not present, let's add it
      this.setState({
        'filters': {
          ...this.state.filters,
          [FILTER_TYPE]: [
            ...this.state.filters[FILTER_TYPE], filter
          ]
        }
      });
    } else {
      // already present, remove it
      let updatedFilters = this.state.filters[FILTER_TYPE]
        .filter((el, index) => index !== indexOfFilter);
      this.setState({
        'filters': {
          ...this.state.filters,
          [FILTER_TYPE]: updatedFilters
        }
      });
    }
  }
  render() {
    return (
      <div className="searchBar">
        <hr/>
        <div className="searchBarFlex">
          <div className="searchBarFlex__investment">Investment opportunities</div>
          <div className="searchBarFlex__input">
            <input
              placeholder="Search"
              ref={ input => {
                this.input = input;
              }}
            />
            <i
              className="fa fa-search fa-sm"
              aria-hidden="true"
              onClick={() => this.props.FilterIdeasRequest({'target': this.input})}
            />
          </div>
          <div className="searchBarFlex__input">
            <span>
              Filter ({
                this.state.filters.categories.length
                + this.state.filters.stages.length
              })
            </span>
            <i
              className={this.state.showFilterModal
                ? 'fa fa-minus fa-sm'
                : 'fa fa-plus fa-sm'}
              aria-hidden="true"
              onClick={() => this.setState({
                'showFilterModal': !this.state.showFilterModal
              })}
            />
          </div>
        </div>
        <hr/>

        <div className={this.state.showFilterModal
          ? 'filter filter--visible'
          : 'filter filter--hidden'}>
          <div className="filter__title">Stage</div>
          <div className="filter__group">
            {
              Object.keys(STAGE).map(key =>
                <div
                  key={Math.random() * 100}
                  className={this.state.filters.stages.indexOf(STAGE[key]) !== -1
                    ? 'selected' :
                    ''}
                  onClick={() => this.addRemoveFilter(STAGE[key])}>
                  {STAGE[key]}
                </div>
              )
            }
          </div>
          <div className="filter__title">Sector</div>
          <div className="filter__group">
            {this.props.categories.map(cat =>
              <div
                key={cat.categoryCode}
                className={this.state.filters.categories
                  .indexOf(cat) !== -1
                  ? 'selected'
                  : ''}
                onClick={() => this.addRemoveFilter(cat)}
              >{cat.description}
              </div>
            )}
          </div>
          <div className="filter__buttonGroup">
            <div
              onClick={() => this.applyFilters()}
              className="filter__buttonGroup--apply">
              Apply filters
            </div>
            <div
              onClick={() => this.clearFilters()}
              className="filter__buttonGroup--clear">
              Clear filters
            </div>
          </div>
        </div>


      </div>
    );
  }
}

SearchBar.propTypes = {
  'FilterIdeasRequest': PropTypes.func,
  'FetchCategoriesRequest': PropTypes.func,
  'FilterIdeasByCategoryRequest': PropTypes.func,
  'ideas': PropTypes.object,
  'categories': PropTypes.object
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('ideas').get('all'),
    'categories': state.get('ideas').get('categories')
  };
};
export default connect(mapStateToProps, {
  FilterIdeasRequest,
  FetchCategoriesRequest,
  FilterIdeasByCategoryRequest
})(SearchBar);
