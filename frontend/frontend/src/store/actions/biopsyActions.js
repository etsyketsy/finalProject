import axios from '../../axios'

import { GET_BIOPSIES } from "../types";

const putBiopsiesInState = biopsies => {
  return {
    type: GET_BIOPSIES,
    payload: biopsies
  };
};

export const getAllBiopsies = () => (dispatch, getState) => {
  const token = getState().authorizationReducer.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios
    .get("biopsy/", config)
    .then(response => {
      dispatch(putBiopsiesInState(response.data));
    })
    .catch(error => error);
};

export const addBiopsyToList = form => (dispatch, getState) => {
  const donorValue = form.donor;
  const valueToKeep = donorValue.substring(5, 6);
  const valueToUse = donorValue.substring(5);
  form.donor = valueToKeep;
  const addProperty = { donor_id: valueToUse };
  const finalForm = Object.assign(form, addProperty);

  console.log("final form", finalForm);

  // const token = getState().authorizationReducer.token;
  const body = JSON.stringify(finalForm);

  return axios.post(
    "biopsy/new/",
    body
  )
    .then(response => {
      console.log("response after fetch", response);
    })
    .catch(err => err);
};
