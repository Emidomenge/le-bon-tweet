import React from 'react';
import PropTypes from 'prop-types';
import ReactSpinner from 'react-spinners/PulseLoader';


const SpinnerLoader = (props) => {
  const {
    labelClass, labelValue, loaderClass, loaderPxSize, bodyClass, colorValue,
  } = props;
  return (
    <div className={`flex items-center flex-column justify-center ${bodyClass}`}>
      <ReactSpinner
        css={loaderClass}
        sizeUnit="px"
        size={loaderPxSize}
        color={colorValue}
        loading
      />
      {
                labelValue

                && <div className={labelClass}>{labelValue}</div>
            }
    </div>
  );
};


SpinnerLoader.propTypes = {
  bodyClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelValue: PropTypes.string,
  colorValue: PropTypes.string,
  loaderClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
  loaderPxSize: PropTypes.number,
};

SpinnerLoader.defaultProps = {
  bodyClass: '',
  labelClass: '',
  labelValue: 'Chargement...',
  colorValue: '#f56b2a',
  loaderClass: {},
  loaderPxSize: 10,
};

export default SpinnerLoader;
