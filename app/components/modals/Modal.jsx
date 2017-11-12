import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {
  DISCLAIMER_MODAL,
  RISK_WARNING_MODAL
} from '../../utilities/constants';
import Disclaimer from './Disclaimer';
import RiskWarning from './RiskWarning';

const getContent = type => {
  if (type === DISCLAIMER_MODAL) {
    return (
      <Disclaimer />
    );
  } else if (type === RISK_WARNING_MODAL) {
    return (
      <RiskWarning />
    );
  }
  return '';
};
const Modal = (props) => {
  return (
    <ReactModal
      {...props}
    >
      {getContent(props.type)}
    </ReactModal>
  );
};

Modal.propTypes = {
  'type': PropTypes.string
};
export default Modal;
