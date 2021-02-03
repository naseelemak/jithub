import { call, put, takeEvery } from "redux-saga/effects";
import Axios from "axios";

const getApi = (url) => {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

function* fetchRepoList(action) {
  const perPage = yield action.payload.perPage;

  try {
    const repoList = yield call(getApi, action.payload.url);
    yield put({ type: "SET_REPOLIST_SUCCESS", payload: repoList });

    // updates allLoaded flag when there are no more pages to load
    repoList.length < perPage &&
      (yield put({ type: "SET_REPOLIST_ALL_LOADED" }));
  } catch (error) {
    // change payload to "error" variable for debugging purposes
    yield put({ type: "SET_REPOLIST_FAILED", payload: true });
  }
}

function* repoListSaga() {
  yield takeEvery("SET_REPOLIST_REQUESTED", fetchRepoList);
}

export default repoListSaga;
