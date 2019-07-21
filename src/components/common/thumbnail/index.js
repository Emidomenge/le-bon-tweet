import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Thumbnail = (props) => {
  const { image, label, children } = props;
  const handleDisplay = () => {
    if (!children) {
      return (<h4 className="mt4 tc">{label}</h4>);
    }
    return (children);
  };
  return (
    <Row>
      <Col>
        <div className={styles.container}>
          <img src={image} className={`mt3 pv4 mr-auto ml-auto ${styles.img}`} alt="Aucun résultat" />
          {handleDisplay()}
        </div>
      </Col>
    </Row>
  );
};


Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.element,
};

Thumbnail.defaultProps = {
  label: '',
  children: null,
};

export default Thumbnail;
