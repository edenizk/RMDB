import { 
  TOGGLE_OVERLAY,
  GET_EPISODES
} from "../actions/actions";

const INITIAL_STATE = {
  overlayCard: false,
  loading : true,
  char: {},
  episodes: []
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY: {
      return {
        ...state,
        overlayCard: action.overlayCard,
        loading: action.loading,
        char: action.char
      };
    }
    case GET_EPISODES: {
      return {
        ...state,
        episodes: action.episodes,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default dataReducer