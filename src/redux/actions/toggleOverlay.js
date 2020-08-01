import { TOGGLE_OVERLAY } from "./actions";
import { GetEpisodes } from "./getEpisodes";

export const ToggleOverlay = ({overlay = false, char = null, loading = false}) => {

  // console.log(char)
  return dispatch => {
    dispatch({
      type: TOGGLE_OVERLAY,
      overlayCard: overlay,
      char: char,
      loading: loading
    });

    if(char !== null)
      dispatch(GetEpisodes(char.episode))
  };
};