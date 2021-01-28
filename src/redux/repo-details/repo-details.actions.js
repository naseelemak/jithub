export const setRepoDetails = (url) => ({
  type: "SET_REPO_DETAILS_REQUESTED",
  payload: url,
});

export const setRepoLanguages = (url) => ({
  type: "SET_REPO_LANGUAGES_REQUESTED",
  payload: url,
});
