
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Thumbnail from '../common/thumbnail';
import welcomeBackImg from '../../assets/img/welcome_back.svg';
import welcomeImg from '../../assets/img/welcome.svg';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = () => ({});

const Welcome = (props) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <Container>
        <Thumbnail
          label="Rebonjour, !"
          image={welcomeBackImg}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Thumbnail
        label="Bienvenue sur lebontweet ! 🧡"
        image={welcomeImg}
      />
    </Container>
  );
};


Welcome.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Welcome.defaultProps = {
  isAuthenticated: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
