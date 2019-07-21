
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Thumbnail from '../common/thumbnail';
import welcomeBackImg from '../../assets/img/welcome_back.svg';
import welcomeImg from '../../assets/img/welcome.svg';
import styles from './index.module.css';
import userLib from '../../lib/user';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = () => ({});

const Welcome = (props) => {
  const { userInfo } = props;

  if (!userInfo) {
    return (
      <Container>
        <Thumbnail
          label="Bienvenue sur lebontweet ! 🧡"
          image={welcomeImg}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Thumbnail
        image={welcomeBackImg}
      >
        <div className="flex items-center flex-column justify-center">
          <img src={userInfo.picture} alt={`${userInfo.firstname}`} className={`db photoCircle ${styles.specialBody}`} />
          <div className="mt4 f25 b">{`Rebonjour, ${userLib.firstCharUpperCase(userInfo.firstname)} !`}</div>
        </div>
      </Thumbnail>
    </Container>
  );
};


Welcome.propTypes = {
  userInfo: PropTypes.shape({
    firstname: PropTypes.string,
    picture: PropTypes.string,
  }),
};

Welcome.defaultProps = {
  userInfo: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
