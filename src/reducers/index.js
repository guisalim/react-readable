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
  GET_COMMENTS,
  // ADD_COMMENT,
  // DELETE_COMMENT,
  // EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from "../actions"

const initialState = {
  posts: [],
  categories: [],
  comments: []
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
      const postsUpVoted = state.posts.map(post => { post.id === action.id && post.voteScore++; return post })
      return {
        ...state,
        posts: postsUpVoted
      };

      case DOWN_VOTE:
      const postsDownVoted = state.posts.map(post => { post.id === action.id && post.voteScore--; return post })
      return {
        ...state,
        posts: postsDownVoted
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };

    case GET_COMMENTS:
      return {
        ...state,
        comments: state.comments.concat(action.comments)
      }
    
    case UPVOTE_COMMENT:
      const commentUpVoted = state.comments.map(comment => { comment.id === action.id && comment.voteScore++; return comment })
      return {
        ...state,
        comments: commentUpVoted
      };

    case DOWNVOTE_COMMENT:
    const commentDownVoted = state.comments.map(comment => { comment.id === action.id && comment.voteScore--; return comment })
    return {
      ...state,
      comments: commentDownVoted
    };

    default:
      return state;
  }
}