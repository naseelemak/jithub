import { combineReducers } from "redux";

import gitUserReducer from "./gituser/gituser.reducer";

export default combineReducers({
  gitUser: gitUserReducer,
});
