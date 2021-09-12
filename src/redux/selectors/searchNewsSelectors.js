const selectPosts = (state) => state.searchNews.posts;
const selectIsLoading = (state) => state.searchNews.isLoading;
const selectIsError = (state) => state.searchNews.isError;
const selectSearchString = (state) => state.searchNews.searchString;

export default {
  selectPosts,
  selectIsLoading,
  selectIsError,
  selectSearchString,
};
