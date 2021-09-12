import produce from 'immer';
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

const INITIAL_STATE = {
  posts: [],
  searchString: '',
  currentPage: 0,
  isError: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NEWS_GET_POSTS_TRIGGER: {
        const draftState = draft;
        draftState.isError = false;
        draftState.isLoading = true;
        return draftState;
      }

      case NEWS_GET_POSTS_SUCCESS: {
        const draftState = draft;
        const newPosts = draftState.posts.concat(action.payload.posts);
        draftState.posts = newPosts;
        return draftState;
      }

      case NEWS_GET_POSTS_ERROR: {
        const draftState = draft;
        draftState.isError = true;
        return draftState;
      }

      case NEWS_GET_POSTS_FULFILL: {
        const draftState = draft;
        draftState.isLoading = false;
        return draftState;
      }

      case NEWS_SET_SEARCH_STRING: {
        const draftState = draft;
        draftState.searchString = action.payload.searchString;
        return draftState;
      }

      case NEWS_SET_CURRENT_PAGE: {
        const draftState = draft;
        draftState.currentPage = action.payload.page;
        return draftState;
      }

      case NEWS_CLEAR_POSTS: {
        const draftState = draft;
        draftState.posts = [];
        return draftState;
      }

      default:
        return state;
    }
  });
