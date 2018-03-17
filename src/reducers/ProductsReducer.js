import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'
import products from '../data/products.json'

import { GET_PRODUCT } from '../actions/products'

const initialState = {
  products,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      const { username } = action
      return update(state, {
        username: { $set: username },
      })
    }
    default:
      return state
  }
}
