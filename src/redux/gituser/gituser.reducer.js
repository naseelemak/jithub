const INITIAL_STATE = {
  currentUser: "react-native-community",
};

const gitUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GITUSER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default gitUserReducer;
