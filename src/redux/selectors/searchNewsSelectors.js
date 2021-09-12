const selectPosts = (state) => state.searchNews.posts;
const selectIsLoading = (state) => state.searchNews.isLoading;
const selectIsError = (state) => state.searchNews.isError;

export default {
  selectPosts,
  selectIsLoading,
  selectIsError,
};
