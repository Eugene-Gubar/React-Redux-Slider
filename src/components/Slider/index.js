import React, { Component } from 'react';
import './slider.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Navigation from './Navigation';
import { connect } from 'react-redux';

class Slider extends Component {
	static propTypes = {
		feed: PropTypes.object
	};

	state = {
		posSlide: 0,
		step: 4,
		offset: 0
	};

	constructor(props) {
		super(props);
		this.autoScroll();
	}

	render() {
		const { slider } = this.props.feed;
		const { posSlide, offset, step } = this.state;
		return (
			<div onMouseEnter={this.stopAutoScroll} onMouseLeave={this.autoScroll} className="slider-app">
				<h2>Slider</h2>

				<div className="slider__image">
					<img src={slider[posSlide].hero} alt={slider[posSlide].text} />
					<div className="slider--title">
						<p>{slider[posSlide].text}</p>
					</div>

					<ul>
						{slider.slice(offset, offset + step).map((slider, index) => {
							index += offset;
							return (
								<li key={slider.text}>
									<Thumbnail
										slider={slider}
										onClickThumb={this.onClickThumb}
										index={index}
										posActive={posSlide}
									/>
								</li>
							);
						})}
					</ul>
				</div>

				<Navigation onClickNavPrev={this.onClickNavPrev} onClickNavNext={this.onClickNavNext} />
			</div>
		);
	}

	onClickNavPrev = () => {
		const { offset, step } = this.state;
		if (this.state.offset - offset < 0) return;
		this.setState({ offset: offset - step });
	};
	onClickNavNext = () => {
		const { offset, step } = this.state;
		if (this.state.offset + offset >= this.props.feed.slider.length) return;
		this.setState({ offset: offset + step });
	};

	onClickThumb = (position) => {
		this.setState({ posSlide: position });
	};

	autoScroll = () => {
		this.timer = setInterval(() => {
			if (this.state.posSlide >= this.props.feed.slider.length - 1) {
				this.stopAutoScroll();
				return;
			}
			this.setState({ posSlide: this.state.posSlide + 1 });
		}, 10000);
	};

	stopAutoScroll = () => {
		clearInterval(this.timer);
	};

	componentWillUnmount() {
		this.stopAutoScroll();
	}
}

export default connect(
	(state) => ({
		feed: state.slider
	}),
	null
)(Slider);
