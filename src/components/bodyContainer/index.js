/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TweetContainer from './components/tweetContainer';
import Thumbnail from './components/thumbnail';
import noTweetsImg from '../../assets/img/no_tweets.svg';
import TweetLoader from './components/tweetLoader';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = (/* dispatch */) => ({});

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.getTweets = this.getTweets.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  componentDidMount() {
    this.getTweets();
  }

  getTweets() {
    const { apiSleepTime, apiCodeAnswer } = this.props;
    const apiUrl = new URL(`https://httpstat.us/${apiCodeAnswer}`);
    const headerParams = {
      token: 'eyJz93a...k4laUWw',
      tokenType: 'Bearer',
    };

    const requestParams = {
      userId: 'xxxxx',
      tweetType: 'public',
    };

    const header = {
      method: 'GET',
      withCredentials: true,
      // credentials: 'include', // in comment to AVOID CORS issues
      headers: {
        Authorization: `${headerParams.tokenType} ${headerParams.token}`,
        'Content-Type': 'application/json',
      },
    };
    /*
      WARNING: fake fetch API below
     */
    requestParams.sleep = apiSleepTime;
    apiUrl.search = new URLSearchParams(requestParams);
    fetch(apiUrl, header)
      .then((response) => {
        if (response && response.ok) {
          return { bonjour: 'hello' };
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log(data, 'json');
        // eslint-disable-next-line no-param-reassign
        data = {};
        // call reducer

        this.setState({
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e, 'error');
      });
  }

  handleDisplay() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (<TweetLoader />);
    }

    const { tweetsReducer: { tweetsToDisplay } } = this.props;

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

    return tweetsToDisplay && tweetsToDisplay.length !== 0
      ? displayTweets(tweetsToDisplay) : <Thumbnail label={"Oops, aucun tweet n'a été trouvé..."} image={noTweetsImg} />;
  }

  render() {
    return (
      <Container>
        {this.handleDisplay()}
      </Container>
    );
  }
}

BodyContainer.propTypes = {
  // BEGIN: Test API props
  apiSleepTime: PropTypes.number,
  apiCodeAnswer: PropTypes.number,
  // END: Test API props
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
  apiSleepTime: 2000,
  apiCodeAnswer: 200,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
