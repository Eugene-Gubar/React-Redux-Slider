
import { SET_FEED_SLIDER } from '../../constants';

const feedSlider = [];

function getFeedSliderReducer(state = feedSlider, action) {

  switch (action.type) {
    case SET_FEED_SLIDER:
      return action.feed;
    default:
      return state;
  }

};


export default reducerSearchTracks;