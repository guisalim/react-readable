import * as API from "../utils/ReadableAPI";

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_POST_CATEGORY = "GET_POST_CATEGORY";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const DELETE_POSTS = "DELETE_POSTS";
export const DOWN_VOTE = "DOWN_VOTE";
export const UP_VOTE = "UP_VOTE";
export const VOTE_POST = "VOTE_POST";
export const CHANGE_SORT = "CHANGE_SORT";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const UPVOTE_COMMENT = "UPVOTE_COMMENT";
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT";

export function addNewPost(post) {
  // API.addNewPost(post).then(post => (
  return { type: ADD_NEW_POST, post };
  // ))
}

const loadPostsSuccess = posts  => ({ type: GET_POSTS, posts })
export function getAllPosts() {
  return async dispatch => {
    dispatch(loadPostsSuccess(await API.getAllPosts()))
  }
}

const loadCategoriesSuccess = categories => ({ type: GET_CATEGORIES, categories })
export function getAllCategories() {
  return async dispatch => {
    dispatch(loadCategoriesSuccess(await API.getAllCategories()))
  }
}