import React, {Component} from 'react';
import {connect} from 'react-redux';
import IdeaTile from './IdeaTile';
import PropTypes from 'prop-types';
import {
  FetchIdeasRequest
} from '../../actions';

class IdeaList extends Component {
  componentWillMount() {
    this.props.FetchIdeasRequest();
  }
  render() {
    return (
      <div className="ideas">
        {
          this.props.filtered.size
            ? this.props.filtered.map(
              idea => <IdeaTile key={Math.random() * 100} idea={idea} />
            )
            : this.props.ideas.map(
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
  'FetchIdeasRequest': PropTypes.func
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('ideas').get('all'),
    'filtered': state.get('ideas').get('filtered')
  };
};
export default connect(mapStateToProps, {
  FetchIdeasRequest
})(IdeaList);
