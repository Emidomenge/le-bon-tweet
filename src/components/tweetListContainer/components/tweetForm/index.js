import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import tweetStyles from '../tweetContainer/index.module.css';
import helper from '../../../../lib/helper';
import tweet from '../../../../lib/tweet';
import tweetFormActions from '../../../../redux/actions/tweetFormActions';
import SpinnerLoader from '../../../common/spinnerLoader';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setLoadingStatusTo: bool => tweetFormActions.setLoadingStatusTo(dispatch, bool),
  submit: submitData => tweetFormActions.submit(dispatch, submitData),
});

class TweetForm extends Component {
  constructor(props) {
    super(props);
    const { text, type } = props;
    this.state = {
      tweetForm: {
        text,
        type,
      },
    };
    this.textChange = this.textChange.bind(this);
    this.publicTweetTrigger = this.publicTweetTrigger.bind(this);
    this.privateTweetTrigger = this.privateTweetTrigger.bind(this);
    this.submitTweet = this.submitTweet.bind(this);
  }

  submitTweet(event) {
    event.preventDefault();
    const { tweetForm, tweetForm: { text, type } } = this.state;
    const { setLoadingStatusTo, submit } = this.props;

    const jwtToken = helper.getJwtToken();

    const headerParams = {
      token: jwtToken.token,
      tokenType: jwtToken.type,
    };

    const fetchInfo = {
      api: {
        sleepTime: 0,
        codeAnswer: 200,
      },
      header: {
        method: 'POST',
        withCredentials: true,
        // credentials: 'include', // in comment to AVOID CORS issues
        headers: {
          Authorization: `${headerParams.tokenType} ${headerParams.token}`,
          'Content-Type': 'application/json',
        },
      },
      requestParams: {
        tweetForm,
      },
    };

    const mockedAnwser = tweet.createFakeTweet(text, type);
    setLoadingStatusTo(true);

    helper.mockFetchCall(fetchInfo, mockedAnwser,
      (data) => {
        // call redux actions
        submit(data);
        setLoadingStatusTo(false);
        this.setState({
          tweetForm: {
            text: '',
            type: [],
          },
        });
      },
      (/* error */) => {
        // TODO: later....
      });
  }

  textChange(event) {
    const newState = this.state;
    newState.tweetForm.text = event.target.value;
    this.setState({
      ...newState,
    });
  }

  publicTweetTrigger() {
    const newState = this.state;
    newState.tweetForm.type = ['*'];
    this.setState({
      ...newState,
    });
  }

  privateTweetTrigger() {
    const newState = this.state;
    const { userReducer: { userInfo: { userId } } } = this.props;
    // TODO: improve restriction. Restricted only to user itself for now...
    newState.tweetForm.type = [userId];
    this.setState({
      ...newState,
    });
  }

  isSubmitButtonDisable() {
    const { tweetForm: { text, type } } = this.state;
    return !(text && type.length !== 0);
  }

  render() {
    const {
      userReducer: {
        userInfo: { personalData: { picture } },
      },
      tweetFormReducer: { isLoading },
    } = this.props;
    const { tweetForm: { text, type } } = this.state;
    return (
      <Col sm={12} className={`mr-auto ml-auto f15 mb2 ${tweetStyles.tweetContainer}`}>
        <img src={picture} alt="tweet form user" className={`${tweetStyles.imgProfile} photoCircle`} />
        <div className={tweetStyles.tweetBody}>
          <Form
            onSubmit={this.submitTweet}
          >
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                onChange={this.textChange}
                as="textarea"
                rows="4"
                placeholder="Quoi de neuf ?"
                value={text}
                disabled={isLoading}
              />
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Col sm={10}>
                  <Form.Check
                    onChange={this.publicTweetTrigger}
                    inline
                    checked={type.length === 1 && type[0] === '*'}
                    type="radio"
                    label="Actu' Tweet"
                    name="tweetType"
                    id="publicTweet"
                    disabled={isLoading}
                  />
                  <Form.Check
                    onChange={this.privateTweetTrigger}
                    inline
                    checked={type.length !== 0 && type[0] !== '*'}
                    type="radio"
                    label="Secret Tweet"
                    name="tweetType"
                    id="privateTweet"
                    disabled={isLoading}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <button
              className={`b white tc fr mb2 ${styles.submitButton}
               ${this.isSubmitButtonDisable() || isLoading ? 'lbtButtonLock o-60' : 'lbtButton'}
              `}
              disabled={this.isSubmitButtonDisable() || isLoading}
              type="submit"
            >
              {
                isLoading ? <SpinnerLoader colorValue="#fff" labelValue="" /> : 'Tweeter'
              }
              {
                !isLoading && <FontAwesomeIcon icon={faPaperPlane} className="ml2" />
              }
            </button>
          </Form>
        </div>

      </Col>
    );
  }
}

TweetForm.propTypes = {
  // BEGIN: Redux props
  userReducer: PropTypes.shape().isRequired,
  tweetFormReducer: PropTypes.shape().isRequired,
  setLoadingStatusTo: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  // END: Redux props
  text: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
};

TweetForm.defaultProps = {
  text: '',
  type: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetForm);
