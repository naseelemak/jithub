import { all } from "redux-saga/effects";
import repoListSaga from "./repo-list/repo-list.sagas";

export default function* rootSaga() {
  yield all([repoListSaga()]);
}
