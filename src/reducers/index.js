import { combineReducers } from 'redux'
import InventoryReducer from './InventoryReducer'

const reducers = combineReducers({
  inventory: InventoryReducer,
})

export default reducers
