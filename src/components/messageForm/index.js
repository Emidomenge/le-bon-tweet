import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import messageFormAction from '../../redux/actions/messageFormAction';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  messageFormAction: () => dispatch(messageFormAction()),
});

const MessageForm = (props) => {
  const { messageFormReducer } = props;
  return (
    <div>
      <p>Hello world</p>
      <div>
        { JSON.stringify(messageFormReducer) }
      </div>
    </div>
  );
};

MessageForm.propTypes = {
  messageFormReducer: PropTypes.arrayOf(PropTypes.any),
};

MessageForm.defaultProps = {
  messageFormReducer: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
