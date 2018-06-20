
import React, { Component } from 'react';
import './slider.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Navigation from './Navigation';
import { connect } from 'react-redux';

class Slider extends Component {
  static propTypes = {
    setFeedSliderAction: PropTypes.func,
    feed: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  state = {
    posImg: 0,
    current_url: this.props.feed.slider[0].hero
  }

  render() {
    console.log('Props: ', this);
    console.log('this.props.feed: ', this.props.feed);
    console.log('============', this.state.current_url);
    const { slider } = this.props.feed;
    const { current_url } = this.state;
    return (
      <div onClick={this.hChangeUrl} className="slider-app">
        <h2>Slider</h2>

        <div className="slider__image">
          <img src={current_url} alt=""/>
        </div>

        <Thumbnail slider={slider} />
        <Navigation slider={slider} />
      </div>
    );
  }

  hChangeUrl = () => {
    this.setState({current_url: this.props.feed.slider[1].hero});
  }

}

export default connect((state) => ({
  feed: state.slider
}), null)(Slider);
