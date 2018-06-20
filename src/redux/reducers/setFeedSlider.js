
import { SET_FEED_SLIDER } from '../../constants';
import jsonMockFeedSlider from '../../mock/slider.json';


function getFeedSliderReducer(state = jsonMockFeedSlider, action) {

  switch (action.type) {
    case SET_FEED_SLIDER:
      return action.feed;
    default:
      return state;
  }

};


export default getFeedSliderReducer;