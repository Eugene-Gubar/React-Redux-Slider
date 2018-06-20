
import { SET_FEED_SLIDER } from '../../constants';


function setFeedSliderAction(type, slider) {

  return {
    type: 'SET_FEED_SLIDER',
    feed: slider
  }
  
}

export default setFeedSliderAction;