import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'
import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'

import { SET_CATEGORY, DISCOUNT_PRODUCT } from '../actions/inventory'

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
    case DISCOUNT_PRODUCT: {
      const { order } = action
      const { products, filteredProduts } = state
      const pIndex = products.findIndex(p => p.id === order.product.id)
      const fIndex = filteredProduts.findIndex(p => p.id === order.product.id)
      return update(state, {
        products: { [pIndex]: { quantity: { $set: products[pIndex].quantity - order.quantity } } },
        filteredProduts: { [fIndex]: { quantity: { $set: products[fIndex].quantity - order.quantity } } },
      })
    }
    default:
      return state
  }
}
