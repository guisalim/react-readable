import { schema } from 'normalizr'

export const CategorySchema = new schema.Entity('categories', {}, { idAttribute: 'name' })

export const PostSchema = new schema.Entity('posts', {})

export const CommentSchema = new schema.Entity('comments', {})