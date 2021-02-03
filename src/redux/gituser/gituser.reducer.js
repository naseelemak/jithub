const INITIAL_STATE = {
  currentUser: "react-native-community",
  loading: false,
  error: false,
};

const gitUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GITUSER_REQUESTED":
      return {
        ...state,
        currentUser: "",
        loading: true,
      };
    case "SET_GITUSER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case "SET_GITUSER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gitUserReducer;
