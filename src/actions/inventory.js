/*
 * CONSTANTS
*/

export const SET_CATEGORY = 'SET_CATEGORY'
export const DISCOUNT_PRODUCT = 'DISCOUNT_PRODUCT'

/*
 * ACTIONS CREATORS
*/

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  }
}

export const discountProduct = (order) => {
  return {
    type: DISCOUNT_PRODUCT,
    order,
  }
}
