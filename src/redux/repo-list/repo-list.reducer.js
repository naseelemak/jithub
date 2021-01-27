const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const repoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_REPOLIST_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_REPOLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_REPOLIST_FAILED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default repoListReducer;
