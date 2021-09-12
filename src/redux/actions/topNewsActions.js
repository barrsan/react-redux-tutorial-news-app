import { newsService } from '@services';
import { actionNames } from '@constants';
import { runTimeout } from '@helpers/timeout';

const {
  NEWS_GET_TOP_POSTS_TRIGGER,
  NEWS_GET_TOP_POSTS_SUCCESS,
  NEWS_GET_TOP_POSTS_ERROR,
  NEWS_GET_TOP_POSTS_FULFILL,
} = actionNames;

const getPosts = () => async (dispatch) => {
  dispatch({
    type: NEWS_GET_TOP_POSTS_TRIGGER,
  });

  try {
    await runTimeout();
    const { data } = await newsService.fetchTopNews();
    dispatch({
      type: NEWS_GET_TOP_POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    dispatch({
      type: NEWS_GET_TOP_POSTS_ERROR,
    });
  } finally {
    dispatch({
      type: NEWS_GET_TOP_POSTS_FULFILL,
    });
  }
};

export default { getPosts };
