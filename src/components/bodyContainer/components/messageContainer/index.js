import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const MessageContainer = (props) => {
  const {
    text, author, authorImage, creationDate, restrictedTo
  } = props;
  return (
    <div>
      <h5>{`${author}`}</h5>
      <div className={styles.body}>
        <p>{text}</p>
      </div>
    </div>
  );
};

MessageContainer.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  restrictedTo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MessageContainer.defaultProps = {
  // Nothing
};

export default MessageContainer;
