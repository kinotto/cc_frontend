import React, {Component} from 'react';
import {connect} from 'react-redux';
import IdeaTile from './IdeaTile';
import PropTypes from 'prop-types';
import {MOST_RECENT_INVESTMENTS} from '../../utilities/constants';
import {
  FetchIdeasRequest,
  FilterIdeasRequest
} from '../../actions';

class IdeaList extends Component {
  constructor() {
    super();
    this.state = {
      'ideas': []
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
    if (newProps.filtered !== this.props.filtered) {
      this.setState({'ideas': newProps.filtered});
    } else {
      this.setState({'ideas': newProps.ideas});
    }
  }
  render() {
    return (
      <div className="ideas">
        {
          this.state.ideas.map(
            idea => <IdeaTile key={Math.random() * 100} idea={idea} />
          )
        }
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
