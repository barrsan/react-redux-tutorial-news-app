import { newsService } from '@services';
import { actionNames } from '@constants';

const {
  NEWS_GET_POSTS_TRIGGER,
  NEWS_GET_POSTS_SUCCESS,
  NEWS_GET_POSTS_ERROR,
  NEWS_GET_POSTS_FULFILL,
  NEWS_SET_CURRENT_PAGE,
  NEWS_SET_SEARCH_STRING,
  NEWS_CLEAR_POSTS,
} = actionNames;

const setCurrentPage = (page) => ({
  type: NEWS_SET_CURRENT_PAGE,
  payload: {
    page,
  },
});

const setSearchString = (searchString) => ({
  type: NEWS_SET_SEARCH_STRING,
  payload: {
    searchString,
  },
});

const clearPosts = () => ({
  type: NEWS_CLEAR_POSTS,
});

const getPosts = () => async (dispatch, getState) => {
  const { searchNews } = getState();

  dispatch({
    type: NEWS_GET_POSTS_TRIGGER,
  });

  try {
    const { data } = await newsService.fetchSearchNewsResult({
      searchString: searchNews.searchString,
      page: searchNews.currentPage + 1,
    });

    dispatch({
      type: NEWS_GET_POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
    dispatch(setCurrentPage(searchNews.currentPage + 1));
  } catch (error) {
    dispatch({
      type: NEWS_GET_POSTS_ERROR,
    });
  } finally {
    dispatch({
      type: NEWS_GET_POSTS_FULFILL,
    });
  }
};

export default { getPosts, setCurrentPage, setSearchString, clearPosts };
