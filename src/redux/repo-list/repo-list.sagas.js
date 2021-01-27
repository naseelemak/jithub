import { call, put, takeEvery } from "redux-saga/effects";
import { useEffect, useState } from "react";
import Axios from "axios";

const url = `https://api.github.com/users/${"react-native-community"}/repos?per_page=${2}&page=${"1"}`;

function getApi() {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function* fetchRepoList(action) {
  try {
    const repoList = yield call(getApi);
    yield put({ type: "GET_REPOLIST_SUCCESS", payload: repoList });
  } catch (error) {
    yield put({ type: "GET_REPOLIST_FAILED", payload: error.message });
  }
}

function* repoListSaga() {
  yield takeEvery("GET_REPOLIST_REQUESTED", fetchRepoList);
}

export default repoListSaga;
