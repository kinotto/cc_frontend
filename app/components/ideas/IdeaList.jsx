import React, {Component} from 'react';
import {connect} from 'react-redux';
import IdeaTile from './IdeaTile';

class IdeaList extends Component {
  render() {
    return (
      <div>
        <IdeaTile/>
      </div>
    );
  }
}

export default connect()(IdeaList);
