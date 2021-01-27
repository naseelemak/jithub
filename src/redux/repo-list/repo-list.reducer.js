const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
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
    default:
      return state;
  }
};

export default repoListReducer;
