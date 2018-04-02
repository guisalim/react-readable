import * as API from '../helpers/api'
import * as types from '../helpers/types'

import { normalize } from 'normalizr'
import { CategorySchema, CommentSchema, PostSchema } from '../helpers/schemas'

// CATEGORIES
export function getCategories() {
  return async dispatch => {
    const response = await API.getCategories()
    const normalized = normalize(response.data.categories, [CategorySchema])
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
    dispatch({ type: types.GET_CATEGORIES, payload: { categories: normalized.result } })
  }
}


// POSTS
export function getPosts() {
  return async dispatch => {
    const response = await API.getAllPosts()
    const normalized = normalize(response.data, [PostSchema])
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
    dispatch({ type: types.GET_POSTS, payload: { posts: normalized.result } })
  }
}

export function createPost(payload) {
  return async dispatch => {
    const response = await API.createPost(payload)
    const normalized = normalize([response.data], [PostSchema])
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
    dispatch({ type: types.CREATE_POST, payload: normalized.result[0] })
  }
}

export function getPost(payload) {
  return async dispatch => {
    const response = await API.getPost(payload)
    const normalized = normalize(response.data, PostSchema)
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
    dispatch({ type: types.GET_POST, payload: { post: normalized.result } })
  }
}

export function upVote(payload) {
  return async dispatch => {
    const response = await API.upPost(payload)
    const normalized = normalize(response.data, PostSchema)
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
  }
}

export function downVote(payload) {
  return async dispatch => {
    const response = await API.downPost(payload)
    const normalized = normalize(response.data, PostSchema)
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
  }
}


//COMMENTS
export function getComments(payload) {
  return async dispatch => {
    const response = await API.getComments(payload)
    const normalized = normalize(response.data, [CommentSchema])
    dispatch({ type: types.ENTITIES, payload: normalized.entities })
    dispatch({ type: types.GET_COMMENTS, payload: { comments: normalized.result } })
  }
}
