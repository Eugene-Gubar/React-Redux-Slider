import React from 'react';
import './navigation.css';
import PropTypes from 'prop-types';

const Navigation = ({ onClickNavPrev, onClickNavNext }) => {
	return (
		<div className="nav-buttons">
			<button onClick={onClickNavPrev} className="btn btn-prev">Prev</button>
			<button onClick={onClickNavNext} className="btn btn-next">Next</button>
		</div>
	);
};

Navigation.propTypes = {
  onClickNavPrev: PropTypes.func,
  onClickNavNext: PropTypes.func
};

export default Navigation;
