import { GET_SUBBIOPSIES } from "../types";

import axios from '../../axios'

const putSubBiopsysInTheState = subBiopsy => {
  return {
    type: GET_SUBBIOPSIES,
    payload: subBiopsy
  };
};

export const getAllSubBiopsies = () => (dispatch, getState) => {
  return axios
    .get("subbiopsy/")
    .then(response => {
      dispatch(putSubBiopsysInTheState(response.data));
    });
};

export const addSubBiopsyToList = form => (dispatch, getState) => {
  const body = JSON.stringify(form);

  return axios.post(
    "subbiopsy/new/",
    body
  )
    .then(response => {
      console.log("response Post Subbiopsy", response);
    })
    .catch(err => err);
};
