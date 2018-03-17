import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import CategoriesReducer from './CategoriesReducer'
import ProductsReducer from './ProductsReducer'

const reducers = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
})

export default reducers
