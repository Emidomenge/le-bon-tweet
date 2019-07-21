import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import tweet from '../../../../lib/tweet';

const TweetContainer = (props) => {
  const {
    text, author, authorImage, creationDate, restrictedTo,
  } = props;

  const displayRestrictionPicto = (restrictedArray) => {
    if (tweet.isPublic(restrictedArray)) {
      return <FontAwesomeIcon icon={faGlobeAmericas} className="ml1" />;
    }
    return <FontAwesomeIcon icon={faLock} className="ml1" />;
  };

  return (
    <div className={`${styles.tweetContainer} f15 mb2`}>
      <img src={authorImage} className={`${styles.imgProfile} mr-auto ml-auto photoCircle`} alt={`tweet de ${author}`} />
      <div className={styles.tweetBody}>
        <div className="flex items-center">
          <div className="black b">{`${author}`}</div>
          <div className="ml1">·</div>
          <div className="ml1">{`${tweet.displayTweetDate(new Date(creationDate))}`}</div>
          <div className="ml1">·</div>
          {displayRestrictionPicto(restrictedTo)}
        </div>
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
