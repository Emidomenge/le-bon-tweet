import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './index.css';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = (/* dispatch */) => ({});

const BodyContainer = (props) => {
  const { children } = props;
  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  );
};

BodyContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

BodyContainer.defaultProps = {
  // Nothing
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
