/*
 * CONSTANTS
*/

export const GET_PRODUCT = 'GET_PRODUCT'

/*
 * ACTIONS CREATORS
*/

export const setCategory = (id) => {
  return {
    type: GET_PRODUCT,
    id,
  }
}
