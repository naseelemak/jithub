import { all } from "redux-saga/effects";
import gitUserListSaga from "./gituser-list/gituser-list.sagas";
import repoListSaga from "./repo-list/repo-list.sagas";
import repoDetailsSaga from "./repo-details/repo-details.sagas";

export default function* rootSaga() {
  yield all([gitUserListSaga(), repoListSaga(), repoDetailsSaga()]);
}
