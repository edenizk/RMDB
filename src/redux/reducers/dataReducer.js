import { 
  GET_ALL_CHARS, INIT_DATA
} from "../actions/actions";

const INITIAL_STATE = {
  chars: [],
  charPageNumber: 0,
  loading : true,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  // console.log("data reducer"  , action);
  switch (action.type) {
    case GET_ALL_CHARS: {
      return {
        ...state,
        chars: state.chars.concat(action.chars).sort((a, b) => a.fame > b.fame ? -1 : 1),
        loading: false
      };
    }
    case INIT_DATA: {
      return {
        ...state,
        chars: action.chars,
        charPageNumber: action.pageNumber
      };
    }
    default:
      return state;
  }
};

export default dataReducer