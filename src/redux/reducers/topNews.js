import produce from 'immer';
import { actionNames } from '@constants';

const {
  NEWS_GET_TOP_POSTS_TRIGGER,
  NEWS_GET_TOP_POSTS_SUCCESS,
  NEWS_GET_TOP_POSTS_ERROR,
  NEWS_GET_TOP_POSTS_FULFILL,
} = actionNames;

const INITIAL_STATE = {
  posts: [],
  isError: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NEWS_GET_TOP_POSTS_TRIGGER: {
        const draftState = draft;
        draftState.isError = false;
        draftState.isLoading = true;
        return draftState;
      }

      case NEWS_GET_TOP_POSTS_SUCCESS: {
        const draftState = draft;
        draftState.posts = action.payload.posts;
        return draftState;
      }

      case NEWS_GET_TOP_POSTS_ERROR: {
        const draftState = draft;
        draftState.isError = true;
        return draftState;
      }

      case NEWS_GET_TOP_POSTS_FULFILL: {
        const draftState = draft;
        draftState.isLoading = false;
        return draftState;
      }

      default:
        return state;
    }
  });
