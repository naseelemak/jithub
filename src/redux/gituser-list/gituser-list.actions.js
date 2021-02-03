export const setGitUserList = (url, perPage) => ({
  type: "SET_GITUSER_LIST_REQUESTED",
  payload: {
    url: url,
    perPage: perPage,
  },
});
