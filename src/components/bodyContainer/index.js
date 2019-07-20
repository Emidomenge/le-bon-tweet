/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TweetContainer from './components/tweetContainer';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = (/* dispatch */) => ({});

const BodyContainer = (props) => {
  const { tweetsReducer: { tweetsToDisplay } } = props;
  const tweetsArray = tweetsToDisplay;

  const displayTweets = tweetsArr => tweetsArr.map((tweet, index) => (
    <TweetContainer
      key={tweet.id + index}
      text={tweet.text}
      author={tweet.createdByUser.fullName}
      authorImage={tweet.createdByUser.picture}
      creationDate={tweet.createdAt}
      restrictedTo={tweet.restrictedTo}
    />
  ));

  return (
    <Container>
      { tweetsArray.length !== 0 ? displayTweets(tweetsArray) : 'Hello' }
    </Container>
  );
};

BodyContainer.propTypes = {
  tweetsReducer: PropTypes.shape({
    tweetsToDisplay: PropTypes.arrayOf(
      PropTypes.shape(
        {
          text: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          restrictedTo: PropTypes.arrayOf(
            PropTypes.string,
          ).isRequired,
          createdByUser: PropTypes.shape(
            {
              id: PropTypes.string.isRequired,
              fullName: PropTypes.string.isRequired,
              picture: PropTypes.string.isRequired,
            },
          ).isRequired,
        },
      ),
    ).isRequired,
  }).isRequired,
};

BodyContainer.defaultProps = {
  // Nothing
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
