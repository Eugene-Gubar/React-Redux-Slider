
import { GET_FEED_SLIDER } from '../../constants';


function actionSearchTracks(search, limit = 3, offset = 0) {

  return dispatch => {
    dispatch({ type: START });
    spotifyApi.searchTracks(search, { limit, offset })
      .then((data) => {
        dispatch({ type: SEARCH_TRACKS + SUCCESS, search: data });
      }, (err) => {
        if (err.status === 401) {
          console.error(`ERROR STATUS ${err.status}, ERROR MESSAGE: ${err.message}`);
          clearBadTokenInStorage();
          initToken();
        }
        else throw err;
      }).catch((err) => {
        console.error('Something Wrong: ', err);
      });
  };
  
}

export default actionSearchTracks;