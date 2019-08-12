import axios from '../../axios'
import {GET_USERS} from "../types";


const putUsersInState = user => {
  return {
    type: GET_USERS,
    payload: user
  }
};
export const getCurrentUser = () => (dispatch, getState) => {
     return axios.get('me/')
  .then(response => {
    console.log('getCurrent user fetch response: ', response)
    dispatch(putUsersInState(response.data))
    return response
  })
};
