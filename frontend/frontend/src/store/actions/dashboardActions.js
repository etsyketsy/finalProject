import { ADD_DONORS } from '../types'
import axios from '../../axios'

const putDonorsInTheState = donors => {
  return {
    type: ADD_DONORS,
    payload: donors
  }
}

export const getAllDonors = () => (dispatch, getState) => {
  const token = getState().authorizationReducer.token

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  return axios.get('donor/', config)
  .then(response => {
    dispatch(putDonorsInTheState(response.data))
  })
}

export const addDonorToList = form => (dispatch, getState) => {
  const body = JSON.stringify(form)

  return axios.post("donor/new/", body)
    .then(response => {
      console.log("response DONOR POST", response);
    })
    .catch(err => err);

}