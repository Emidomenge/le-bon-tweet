import React from 'react';
import PropTypes from 'prop-types';
import ReactSpinner from 'react-spinners/ClimbingBoxLoader';
import styles from './index.module.css';

const Loader = (props) => {
  const {
    labelClass, labelValue, loaderClass, loaderPxSize, bodyClass,
  } = props;
  return (
    <div className={`flex items-center flex-column justify-center ${bodyClass}`}>
      <ReactSpinner
        css={loaderClass}
        sizeUnit="px"
        size={loaderPxSize}
        color="#f56b2a"
        loading
      />
      {
        labelValue

        && <div className={labelClass}>{labelValue}</div>
      }
    </div>
  );
};


Loader.propTypes = {
  bodyClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelValue: PropTypes.string,
  loaderClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
  loaderPxSize: PropTypes.number,
};

Loader.defaultProps = {
  bodyClass: '',
  labelClass: '',
  labelValue: 'Chargement...',
  loaderClass: {},
  loaderPxSize: 15,
};

export default Loader;
