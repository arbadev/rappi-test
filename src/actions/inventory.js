/*
 * CONSTANTS
*/

export const SET_CATEGORY = 'SET_CATEGORY'

/*
 * ACTIONS CREATORS
*/

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  }
}
