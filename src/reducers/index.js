import { 
  ADD_NEW_POST, GET_POSTS, GET_CATEGORIES } from "../actions";

export default function (state = { posts: [], categories: [] }, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...state, action.posts]
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state, action.post]
      };
    case GET_CATEGORIES:
       return {
        ...state,
          categories: [...state, action.categories]
        };
    default:
      return state;
  }
}