import { call, put, takeEvery } from "redux-saga/effects";
import Axios from "axios";

const getApi = (url) => {
  return Axios.get(url)
    .then((response) => response.data.items)
    .catch((error) => {
      throw error;
    });
};

function* fetchGitUserList(action) {
  try {
    const gitUserList = yield call(getApi, action.payload.url);
    yield put({ type: "SET_GITUSER_LIST_SUCCESS", payload: gitUserList });
  } catch (error) {
    // change payload to "error" variable for debugging purposes
    yield put({ type: "SET_GITUSER_LIST_FAILED", payload: error });
  }
}

function* gitUserListSaga() {
  yield takeEvery("SET_GITUSER_LIST_REQUESTED", fetchGitUserList);
}

export default gitUserListSaga;
