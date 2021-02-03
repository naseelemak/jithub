import { userList } from "./test-data";

const INITIAL_STATE = {
  userList: userList,
  loading: false,
  error: false,
};

const gitUserListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GITUSER_LIST_REQUESTED":
      return {
        ...state,
        userList: [],
        loading: true,
      };
    case "SET_GITUSER_LIST_SUCCESS":
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    case "SET_GITUSER_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gitUserListReducer;
