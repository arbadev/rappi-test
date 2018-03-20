import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/cart'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { order } = action
      const { items } = state
      const index = items.findIndex(o => o.product.id === order.product.id)
      const opts = index > -1 ?
        update(state, {
          items: { [index]: { quantity: { $set: order.quantity + items[index].quantity } } },
        })
        :
        update(state, {
          items: { $push: [order] },
        })
      return opts
    }
    case REMOVE_PRODUCT: {
      const { order } = action
      const { items } = state
      const index = items.findIndex(o => o.product.id === order.product.id)
      return update(state, {
        items: { $splice: [[index, 1]] },
      })
    }
    default:
      return state
  }
}
