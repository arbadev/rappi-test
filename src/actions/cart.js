/*
 * CONSTANTS
*/

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/*
 * ACTIONS CREATORS
*/

export const addProduct = (order) => {
  return {
    type: ADD_PRODUCT,
    order,
  }
}

export const removeProduct = (order) => {
  return {
    type: REMOVE_PRODUCT,
    order,
  }
}
