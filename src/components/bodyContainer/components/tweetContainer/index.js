import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import styles from './index.module.css';
import helper from '../../../../lib/helper';

const TweetContainer = (props) => {
  const {
    text, author, authorImage, creationDate, restrictedTo,
  } = props;
  return (
    <div>
      <div className="flex items-center">
        <img src={authorImage} className={styles.imgProfile} alt={`tweet de ${author}`} />
        <div>{`${author}`}</div>
        <div>·</div>
        <div>{`${helper.displayTweetDate(new Date(creationDate))}`}</div>
      </div>
      <div className={styles.body}>
        <p>{text}</p>
      </div>
    </div>
  );
};

TweetContainer.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  restrictedTo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TweetContainer.defaultProps = {
  // Nothing
};

export default TweetContainer;
