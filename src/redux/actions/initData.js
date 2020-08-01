import { INIT_DATA } from "./actions";
import axios from 'axios';
import { GetAllChars } from "./getAllChars";

export const InitData = () => {
  // console.log("InitData");

  return dispatch => {
      // console.log("InitData dispatch");

      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
          res.data.results.forEach((element) => {
            element.fame = element.episode.length
          });

          dispatch({
              type: INIT_DATA,
              pageNumber: res.data.info.pages,
              chars: res.data.results
          });

          dispatch(GetAllChars(res.data.info.pages))
      })

      return true
  };
};