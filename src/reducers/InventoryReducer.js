import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'
import { categories } from '../data/categories.json'
import { products } from '../data/products.json'

import { SET_CATEGORY } from '../actions/inventory'

const initialState = {
  selectedCategory: null,
  filteredProduts: products,
  categories,
  products,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      const { category } = action
      let { filteredProduts, products } = state
      filteredProduts = products
      filteredProduts = filteredProduts.filter(product => product.sublevel_id === category.id)
      return update(state, {
        selectedCategory: { $set: category },
        filteredProduts: { $set: filteredProduts },
      })
    }
    default:
      return state
  }
}
