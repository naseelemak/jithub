import { call, put, takeEvery, select } from "redux-saga/effects";
import Axios from "axios";

const getApi = (url) => {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

function* fetchRepoList(action) {
  try {
    const repoList = yield call(getApi, action.payload);
    yield put({ type: "SET_REPOLIST_SUCCESS", payload: repoList });
  } catch (error) {
    yield put({ type: "SET_REPOLIST_FAILED", payload: true });
  }
}

function* repoListSaga() {
  yield takeEvery("SET_REPOLIST_REQUESTED", fetchRepoList);
}

export default repoListSaga;
