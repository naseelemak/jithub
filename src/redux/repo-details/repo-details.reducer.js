const INITIAL_STATE = {
  details: {},
  languages: [],
  loading: false,
  error: false,
};

const repoDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_REPO_DETAILS_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "SET_REPO_DETAILS_SUCCESS":
      return {
        ...state,
        details: action.payload,
        loading: true, // loading is done once languages have been loaded too
      };
    case "SET_REPO_DETAILS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_REPO_LANGUAGES_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "SET_REPO_LANGUAGES_SUCCESS":
      return {
        ...state,
        languages: action.payload,
        loading: false,
      };
    case "SET_REPO_LANGUAGES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repoDetailsReducer;
