import { GET_EPISODES } from "./actions";
import axios from 'axios';

export const GetEpisodes = (episodes) => {
  if(!episodes)
    return
  let requests = []

  episodes.forEach((episode) => requests.push(axios.get(episode)))
  // console.log(requests)

  return dispatch => {
      axios.all(requests).then(responses => {
        // console.log(responses)

        dispatch({
          type: GET_EPISODES,
          episodes: responses
        });
      }).catch(error => {
        console.log(error)
      })
  };
};