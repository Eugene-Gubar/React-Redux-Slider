
import React, { Component } from 'react';
import './slider.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Navigation from './Navigation';
// import { connect } from 'react-redux';

class Slider extends Component {
  static propTypes = { }



  render() {
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
export default Slider;
// const mapStateToProps = (state) => ({
  
// });

// const mapDispatchToProps = {
  
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Slider);
