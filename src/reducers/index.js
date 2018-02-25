import {
  GET_POSTS,
  // GET_POST,
  GET_CATEGORIES,
  GET_POST_CATEGORY,
  ADD_NEW_POST,
  // EDIT_POST,
  DELETE_POST,
  // REMOVE_POST,
  // DELETE_POSTS,
  DOWN_VOTE,
  UP_VOTE,
  // VOTE_POST,
  // CHANGE_SORT,
  // ADD_COMMENT,
  // DELETE_COMMENT,
  // EDIT_COMMENT,
  // UPVOTE_COMMENT,
  // DOWNVOTE_COMMENT
} from "../actions"

const initialState = {
  posts: [],
  categories: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case GET_POST_CATEGORY:
      return {
        ...state,
        filter: action.filter
      };

    case ADD_NEW_POST:
      return {
        ...state,
        posts: state.posts.concat(action.post)
      };

    case DELETE_POST:
      const remainPost = state.posts.filter(post => post.id !== action.id)
      return {
        ...state,
        posts: remainPost
      };

    case UP_VOTE:
      return {
        ...state
      };
    
    case DOWN_VOTE:
      return {
        ...state
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };


    default:
      return state;
  }
}