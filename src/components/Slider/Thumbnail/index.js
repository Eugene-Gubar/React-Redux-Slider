import React from 'react';
import './thumbnail.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ slider, onClickThumb, index, posActive }) => {
	return (
		<div
			onClick={() => {
				onClickThumb(index);
			}}
			className={`thumbnail__section ${posActive === index ? 'thumbnail--active' : ''}`}
		>
			<img className="thumbnail--image" src={slider.image} alt={slider.text} />
			<div className="thumbnail--title">
				<p>{slider.text}</p>
			</div>
		</div>
	);
};

Thumbnail.propTypes = {
	slider: PropTypes.object,
	onClickThumb: PropTypes.func,
	index: PropTypes.number,
	posActive: PropTypes.number
};

export default Thumbnail;
