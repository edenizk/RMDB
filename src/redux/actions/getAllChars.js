import { GET_ALL_CHARS } from "./actions";
import axios from 'axios';

export const GetAllChars = (length) => {
  // console.log("GET_ALL_CHARS");

  return dispatch => {
      // console.log("GET_ALL_CHARS dispatch");
      let result = [];
      let requests = []

      for (let index = 2; index <= length; index++) {
        requests.push(axios.get(`https://rickandmortyapi.com/api/character/?page=` + index))
      }

      axios.all(requests).then(responses => {
        responses.forEach(response => {
          response.data.results.forEach((element) => {
            element.fame = element.episode.length
          });

          result.push(...response.data.results)
        });

        dispatch({
          type: GET_ALL_CHARS,
          chars: result
        });
      }).catch(error => {
        console.log(error)
      })
  };
};