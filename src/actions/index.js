import * as API from "../utils/ReadableAPI"

export const GET_POSTS = "GET_POSTS"
export const GET_POST = "GET_POST"
export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_POST_CATEGORY = "GET_POST_CATEGORY"
export const ADD_NEW_POST = "ADD_NEW_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const REMOVE_POST = "REMOVE_POST"
export const DELETE_POSTS = "DELETE_POSTS"
export const DOWN_VOTE = "DOWN_VOTE"
export const UP_VOTE = "UP_VOTE"
export const VOTE_POST = "VOTE_POST"
export const CHANGE_SORT = "CHANGE_SORT"
export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"
export const SET_FILTER = "SET_FILTER"

const loadPostsSuccess = posts => ({ type: GET_POSTS, posts })
export function getAllPosts() {
  return async dispatch => {
    dispatch(loadPostsSuccess(await API.getAllPosts()))
  }
}

const loadPostsCategorySuccess = posts => ({ type: GET_POST_CATEGORY, posts })
export function getAllPostsForCategory(category) {
  return async dispatch => {
    dispatch(loadPostsCategorySuccess(await API.getAllPostsForCategory(category)))
  }
}

const deletePostSucess = id => ({ type: DELETE_POST, id })
export function deletePost(id) {
  return async dispatch => {
    await API.deletePost(id)
    dispatch(deletePostSucess(id))
  }
}

const addPostSucess = post => ({ type: ADD_NEW_POST, post })
export function addNewPost(post) {
  return async dispatch => {
    dispatch(addPostSucess(await API.addNewPost(post)))
  }
}

const voteUpPostSucess = id => ({ type: UP_VOTE, id })
export function votePostUp(id) {
  return async dispatch => {
    dispatch(voteUpPostSucess(await API.votePost(id, 'upVote')))
  }
}

const voteDownPostSucess = id => ({ type: DOWN_VOTE, id })
export function votePostDown(id) {
  return async dispatch => {
    dispatch(voteDownPostSucess(await API.votePost(id, 'downVote')))
  }
}

const loadCategoriesSuccess = categories => ({ type: GET_CATEGORIES, categories })
export function getAllCategories() {
  return async dispatch => {
    dispatch(loadCategoriesSuccess(await API.getAllCategories()))
  }
}