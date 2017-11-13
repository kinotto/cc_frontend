import React, {Component} from 'react';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterIdeasRequest} from '../actions';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      'showFilterModal': false
    };
  }
  componentDidMount() {
    Observable.fromEvent(this.input, 'keyup')
      .debounceTime(200)
      .filter(evt => evt.keyCode === 13)
      .subscribe(this.props.FilterIdeasRequest);
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
              Filter (0)
            </span>
            <i
              className={this.state.showFilterModal ? 'fa fa-minus fa-sm' : 'fa fa-plus fa-sm'}
              aria-hidden="true"
              onClick={() => this.setState({'showFilterModal': !this.state.showFilterModal})}
            />
          </div>
        </div>
        <hr/>

        <div className={this.state.showFilterModal
          ? 'filter filter--visible'
          : 'filter filter--hidden'}>
          <div className="filter__title">Stage</div>
          <div className="filter__group">
            <div>Seed</div>
            <div>Early</div>
            <div>Growth</div>
          </div>
          <div className="filter__title">Sector</div>
          <div className="filter__group">
            <div>Automotive</div>
            <div>Business services</div>
            <div>Consumer goods</div>
            <div>Consumer internet</div>
            <div>Education</div>
            <div>Entartainment and media</div>
            <div>Fitness & sports</div>
          </div>
          <div className="filter__group">
            <div>Food & beverage (FMCG)</div>
            <div>Healthtech & healthcare</div>
            <div>IT & Telecommunications</div>
            <div>Leisure and tourism</div>
            <div>Manufacturing</div>
            <div>Restaurants, cafes and bars</div>
          </div>
          <div className="filter__buttonGroup">
            <div className="filter__buttonGroup--apply">Apply filters</div>
            <div className="filter__buttonGroup--clear">Clear filters</div>
          </div>
        </div>


      </div>
    );
  }
}

SearchBar.propTypes = {
  'FilterIdeasRequest': PropTypes.func,
  'ideas': PropTypes.object
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('ideas').get('all')
  };
};
export default connect(mapStateToProps, {
  FilterIdeasRequest
})(SearchBar);
