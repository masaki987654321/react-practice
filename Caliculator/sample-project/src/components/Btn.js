import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({n, onClick}) => (
  <button onClick={onClick}>{n}</button>
);

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Btn;