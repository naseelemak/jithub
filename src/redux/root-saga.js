import { all } from "redux-saga/effects";
import repoListSaga from "./repo-list/repo-list.sagas";
import repoDetailsSaga from "./repo-details/repo-details.sagas";

export default function* rootSaga() {
  yield all([repoListSaga(), repoDetailsSaga()]);
}
