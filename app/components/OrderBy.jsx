import React, {Component} from 'react';
import Select from 'react-select';
import {
  MOST_RECENT_INVESTMENTS,
  NEWEST,
  PERCENTAGE_RAISED,
  AMOUNT_RAISED,
  DISCLAIMER_MODAL,
  RISK_WARNING_MODAL
} from '../utilities/constants';
import Modal from './modals/Modal';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterIdeasRequest} from '../actions';

const options = [
  {'value': MOST_RECENT_INVESTMENTS, 'label': MOST_RECENT_INVESTMENTS},
  {'value': NEWEST, 'label': NEWEST},
  {'value': PERCENTAGE_RAISED, 'label': PERCENTAGE_RAISED},
  {'value': AMOUNT_RAISED, 'label': AMOUNT_RAISED}
];

class OrderBy extends Component {
  constructor() {
    super();
    this.state = {
      'isOpenModal': false,
      'modalType': '',
      'selectedVal': MOST_RECENT_INVESTMENTS
    };
    this.changeOrder = this.changeOrder.bind(this);
  }
  changeOrder(order) {
    this.setState({'selectedVal': order});
    this.props.FilterIdeasRequest(order.value);
  }
  render() {
    return (
      <div className="sort">
        <div className="orderBy">
          <div className="orderBy__select">
            <Select
              name="form-field-name"
              value={this.state.selectedVal}
              options={options}
              onChange={val => this.changeOrder(val)}
            />
          </div>
          <div className="orderBy__disclaimer">
          Capital at Risk. Please read our
            <span
              className="orderBy__disclaimer--orange"
              onClick={() => {
                this.setState({'isOpenModal': true, 'modalType': RISK_WARNING_MODAL});
              }}>
              {' risk warning '}
            </span>
          and
            <span
              className="orderBy__disclaimer--orange"
              onClick={() => {
                this.setState({'isOpenModal': true, 'modalType': DISCLAIMER_MODAL});
              }}>
              {' disclaimer '}
            </span>
          </div>
        </div>

        <Modal
          isOpen={this.state.isOpenModal}
          onRequestClose={() => this.setState({'isOpenModal': false})}
          contentLabel=""
          type={this.state.modalType}
        />
      </div>
    );
  }
}

OrderBy.propTypes = {
  'FilterIdeasRequest': PropTypes.func
};
export default connect(null, {
  FilterIdeasRequest
})(OrderBy);
