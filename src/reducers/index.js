import { combineReducers } from 'redux'
import InventoryReducer from './InventoryReducer'
import CartReducer from './CartReducer'

const reducers = combineReducers({
  inventory: InventoryReducer,
  cart: CartReducer,
})

export default reducers
