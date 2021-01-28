import { call, put, takeEvery } from "redux-saga/effects";
import Axios from "axios";

const getApi = (url) => {
  return Axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// Converts language API data into usable form
// =================================================================
const convertLanguageList = (repoRawLanguages) => {
  const repoLanguageDetails = Object.entries(repoRawLanguages).map(
    ([language, units]) => {
      return { name: language, units: units };
    }
  );

  // Gets the total quantity of language units to calculate percentage
  const totalLanguageUnits = repoLanguageDetails.reduce(
    (accumulatedQuantity, lang) => accumulatedQuantity + lang.units,
    0
  );

  const repoLanguageList = repoLanguageDetails.map(({ name, units }, index) => {
    let percentage = units / totalLanguageUnits;
    percentage = Math.round(percentage * 1000) / 10;

    return {
      id: index,
      name: name,
      percentage: percentage,
    };
  });

  return repoLanguageList;
};
// =================================================================

function* fetchRepoDetails(url) {
  try {
    const repoDetails = yield call(getApi, url);
    yield put({ type: "SET_REPO_DETAILS_SUCCESS", payload: repoDetails });
    return repoDetails;
  } catch (error) {
    yield put({ type: "SET_REPO_DETAILS_FAILED", payload: true });
  }
}

function* fetchRepoLanguages(repoDetails) {
  try {
    const repoRawLanguages = yield call(getApi, repoDetails.languages_url);
    const repoLanguageList = yield convertLanguageList(repoRawLanguages);
    yield put({
      type: "SET_REPO_LANGUAGES_SUCCESS",
      payload: repoLanguageList,
    });
  } catch (error) {
    yield put({ type: "SET_REPO_LANGUAGES_FAILED", payload: true });
  }
}

function* invokeSagasInOrder(action) {
  try {
    const repoDetails = yield* fetchRepoDetails(action.payload);
    yield* fetchRepoLanguages(repoDetails);
  } catch (error) {
    console.log("invokeSagasInOrder error: " + error);
  }
}

function* repoDetailsSaga() {
  yield takeEvery("SET_REPO_DETAILS_REQUESTED", invokeSagasInOrder);
}

export default repoDetailsSaga;
