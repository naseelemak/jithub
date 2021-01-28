import { combineReducers } from "redux";

import gitUserReducer from "./gitUser/gituser.reducer";
import repoListReducer from "./repo-list/repo-list.reducer";
import repoDetailsReducer from "./repo-details/repo-details.reducer";

export default combineReducers({
  gitUser: gitUserReducer,
  repoList: repoListReducer,
  repoDetails: repoDetailsReducer,
});
