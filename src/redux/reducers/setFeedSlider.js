
import { SET_FEED_SLIDER } from '../../constants';

const feedSlider = {
  "slider": [{
      "hero": "https://placeimg.com/640/480/animals",
      "text": "Animals are here.",
      "image": "https://placeimg.com/150/150/animals/sepia"
    },
    {
      "hero": "https://placeimg.com/640/480/people",
      "text": "People are here.",
      "image": "https://placeimg.com/150/150/people/sepia"
    },
    {
      "hero": "https://placeimg.com/640/480/tech",
      "text": "Tech is here.",
      "image": "https://placeimg.com/150/150/tech/sepia"
    }
  ]
};

function getFeedSliderReducer(state = feedSlider, action) {

  switch (action.type) {
    case SET_FEED_SLIDER:
      return action.feed;
    default:
      return state;
  }

};


export default getFeedSliderReducer;