import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import CategoriesReducer from './CategoriesReducer'

const reducers = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
})

export default reducers
