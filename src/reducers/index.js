import { combineReducers } from 'redux'

import categories from './categories'
import entities from './entities'
import views from './views'

export default combineReducers({
    categories, views, entities
})