import { userList } from "./test-data";

const INITIAL_STATE = {
  userList: [],
  allLoaded: false,
  loading: false,
  error: false,
};

const gitUserListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GITUSER_LIST_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "SET_GITUSER_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        userList: [...state.userList, ...action.payload],
      };
    case "SET_GITUSER_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_GITUSER_LIST_ALL_LOADED":
      return {
        ...state,
        allLoaded: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default gitUserListReducer;
