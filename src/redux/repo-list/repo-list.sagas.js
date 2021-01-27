import { call, put, takeEvery } from "redux-saga/effects";
import { useEffect, useState } from "react";
import Axios from "axios";

// - change this to arrow function for consistency
function getApi(url) {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function* fetchRepoList(action) {
  try {
    const repoList = yield call(getApi, action.payload);
    yield put({ type: "SET_REPOLIST_SUCCESS", payload: repoList });
  } catch (error) {
    yield put({ type: "SET_REPOLIST_FAILED", payload: false });
  }
}

function* repoListSaga() {
  yield takeEvery("SET_REPOLIST_REQUESTED", fetchRepoList);
}

export default repoListSaga;
