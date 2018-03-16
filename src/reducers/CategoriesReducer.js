import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'
import categories from '../data/categories.json'

import { SET_CATEGORY } from '../actions/categories'

const initialState = {
  selectedCategory: null,
  categories,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      const { username } = action
      return update(state, {
        username: { $set: username },
      })
    }
    default:
      return state
  }
}
