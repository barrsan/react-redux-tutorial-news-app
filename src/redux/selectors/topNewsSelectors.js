const selectPosts = (state) => state.topNews.posts;
const selectIsLoading = (state) => state.topNews.isLoading;
const selectIsError = (state) => state.topNews.isError;

export default {
  selectPosts,
  selectIsLoading,
  selectIsError,
};
