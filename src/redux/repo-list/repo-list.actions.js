export const setRepoList = (url, perPage) => ({
  type: "SET_REPOLIST_REQUESTED",
  payload: {
    url: url,
    perPage: perPage,
  },
});
