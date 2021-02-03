import { combineReducers } from "redux";

import gitUserReducer from "./gitUser/gituser.reducer";
import gitUserListReducer from "./gituser-list/gituser-list.reducer";
import repoListReducer from "./repo-list/repo-list.reducer";
import repoDetailsReducer from "./repo-details/repo-details.reducer";

export default combineReducers({
  gitUser: gitUserReducer,
  gitUserList: gitUserListReducer,
  repoList: repoListReducer,
  repoDetails: repoDetailsReducer,
});
