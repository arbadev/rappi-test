/*
 * CONSTANTS
*/

export const ADD_PRODUCT = 'ADD_PRODUCT'

/*
 * ACTIONS CREATORS
*/

export const addProduct = (order) => {
  return {
    type: ADD_PRODUCT,
    order,
  }
}
