import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'
import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'

import { SET_CATEGORY } from '../actions/inventory'

const initialState = {
  selectedCategory: null,
  filteredProduts: [],
  categories: categoriesData.categories,
  products: productsData.products,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      const { category } = action
      const { products } = state
      let { filteredProduts } = state
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
