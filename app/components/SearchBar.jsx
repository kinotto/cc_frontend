import React, {Component} from 'react';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterIdeasRequest} from '../actions';

class SearchBar extends Component {
  componentDidMount() {
    Observable.fromEvent(this.input, 'keyup')
      .debounceTime(200)
      .filter(evt => evt.keyCode === 13)
      .subscribe(this.props.FilterIdeasRequest);
  }

  /* search(e) {
    let filteredIdeas;
    if (e.target.value) {
      filteredIdeas = this.props.ideas.filter(idea =>
        idea.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
      );
    } else {
      filteredIdeas = this.props.ideas.toJS();
    }

    this.props.FilteredIdeas(filteredIdeas);
  }*/

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
            <span>Filter (0)</span>
            <i className="fa fa-plus fa-sm" aria-hidden="true" />
          </div>
        </div>
        <hr/>
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
