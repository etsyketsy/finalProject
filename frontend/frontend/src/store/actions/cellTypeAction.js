import axios from '../../axios'

import { GET_CELL_TYPES } from '../types'


const putCellTypesInState = cellTypes => {
  return {
    type: GET_CELL_TYPES,
    payload: cellTypes
  }
}

export const getAllCellTypes = () => (dispatch, getState) => {
    return axios.get("celltypes/")
    .then(response => {
      dispatch(putCellTypesInState(response.data))
    }).catch(error => error)
  }
  

  export const addCellTypeToList = form => (dispatch, getState) => {
    const body = JSON.stringify(form);

    return axios.post(
      "celltypes/new/",
      body,
    )
      .then(response => {
        console.log("response Post celltype", response);
      })
      .catch(err => err);
  };