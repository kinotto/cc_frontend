import React, {Component} from 'react';
import {connect} from 'react-redux';
import IdeaTile from './IdeaTile';
import PropTypes from 'prop-types';
import {MOST_RECENT_INVESTMENTS} from '../../utilities/constants';
import InfiniteScroll from 'react-infinite-scroller';
import {
  FetchIdeasRequest,
  FilterIdeasRequest
} from '../../actions';

class IdeaList extends Component {
  constructor() {
    super();
    this.loadMore = this.loadMore.bind(this);
    this.state = {
      'ideas': [],
      'ideasInfinite': [],
      // load 3 ideas at a time with infinite scroll
      'INFINITE_LOAD_MORE': 3,
      // nr ideas shown at the beginning
      'INFINITE_NR_BASE': 3,
      'INFINITE_HAS_MORE': true
    };
  }
  componentWillMount() {
    this.props.FetchIdeasRequest();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.ideas !== this.props.ideas) {
      // only once at refresh
      this.props.FilterIdeasRequest(MOST_RECENT_INVESTMENTS);
    }
    let ideas;
    if (newProps.filtered !== this.props.filtered) {
      // this.setState({'ideas': newProps.filtered});
      ideas = newProps.filtered;
    } else {
      // this.setState({'ideas': newProps.ideas});
      ideas = newProps.ideas;
    }
    this.setState({'ideasInfinite': ideas
      .filter((el, index) => index < this.state.INFINITE_NR_BASE)});
  }

  loadMore() {
    setTimeout(() => {
      let ideaLoaded = this.props.ideas
        .filter((idea, index) =>
          index < (this.state.INFINITE_NR_BASE + this.state.INFINITE_LOAD_MORE)
        );
      if (ideaLoaded.size !== this.state.ideasInfinite.size) {
        this.setState({'ideasInfinite': ideaLoaded});
        this.setState({'INFINITE_NR_BASE': this.state.INFINITE_NR_BASE + this.state.INFINITE_LOAD_MORE});
        if (this.state.INFINITE_NR_BASE >= this.props.ideas.size) {
          this.setState({'INFINITE_HAS_MORE': false});
        }
      }
    }, 2000);
  }
  render() {
    return (

      <div>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.INFINITE_HAS_MORE}
          loader={<div className="loader-container">
            <img src="../images/loader.gif" className="loader"/></div>}
          useWindow={false}
        >
          <div className="ideas">
            {
              this.state.ideasInfinite.map(
                idea => <IdeaTile key={Math.random() * 100} idea={idea} />
              )
            }

          </div>
        </InfiniteScroll>

      </div>
    );
  }
}

IdeaList.propTypes = {
  'ideas': PropTypes.object,
  'filtered': PropTypes.object,
  'FetchIdeasRequest': PropTypes.func,
  'FilterIdeasRequest': PropTypes.func
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('ideas').get('all'),
    'filtered': state.get('ideas').get('filtered')
  };
};
export default connect(mapStateToProps, {
  FetchIdeasRequest,
  FilterIdeasRequest
})(IdeaList);
