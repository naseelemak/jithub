const INITIAL_STATE = {
  data: [],
  allLoaded: false,
  loading: false,
  error: false,
};

const repoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_REPOLIST_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "SET_REPOLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case "SET_REPOLIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_REPOLIST_ALL_LOADED":
      return {
        ...state,
        allLoaded: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default repoListReducer;
