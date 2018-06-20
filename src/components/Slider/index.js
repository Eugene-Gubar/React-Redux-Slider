
import React, { Component } from 'react';
import './slider.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import setFeedSliderAction from '../../redux/actions/setFeedSlider';
import { SET_FEED_SLIDER } from '../../constants';
import jsonMockFeedSlider from '../../mock/slider.json';

class Slider extends Component {
  static propTypes = {
    setFeedSliderAction: PropTypes.func,
    feed: PropTypes.object
  }

  // JSON date can will be recived from props Parent component
  componentDidMount() {
    if (!this.props.feed.slider) return;
    const { setFeedSliderAction } = this.props;
    setFeedSliderAction(SET_FEED_SLIDER, jsonMockFeedSlider);
  }

  render() {
    console.log('Props: ', this);
    console.log('this.props.feed: ', this.props.feed);
    const { slider } = this.props.feed;
    return (
      <div>
        <h2>Slider</h2>
        <Thumbnail slider={slider} />
        <Navigation slider={slider} />
      </div>
    );
  }
}

export default connect((state) => ({
  feed: state.slider
}), {
  setFeedSliderAction
})(Slider);
