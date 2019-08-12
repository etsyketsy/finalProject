import { GET_PLOT_DATA } from "../types";
import axios from '../../axios'

const putDataInState = data => {
  return {
    type: GET_PLOT_DATA,
    payload: data
  };
};

export const getPlotData = (id) => (dispatch, getState) => {
  const token = getState().authorizationReducer.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios
    .get(`passage/biopsy/1`, config)
    .then(response => {
        dispatch(putDataInState(response.data));
        return response
    }).catch(error => {
        console.log(error)
    });
};
