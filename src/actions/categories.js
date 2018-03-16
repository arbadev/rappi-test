/*
 * CONSTANTS
*/

export const SET_CATEGORY = 'SET_CATEGORY'

/*
 * ACTIONS CREATORS
*/

export const setCategory = (id) => {
  return {
    type: SET_CATEGORY,
    id,
  }
}
