import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import jsonMockFeedSlider from './mock/slider.json';

class App extends Component {
  render() {
    return (
      <Slider feed={jsonMockFeedSlider} />
    );
  }
}

export default App;
