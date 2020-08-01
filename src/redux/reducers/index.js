import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import UIReducer from "./UIReducer";

const rootReducer = combineReducers({
  dataReducer,
  UIReducer
})

export default rootReducer;