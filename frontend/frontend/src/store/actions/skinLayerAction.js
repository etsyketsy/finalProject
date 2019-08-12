import axios from '../../axios'

import { GET_SKIN_LAYERS } from "../types";

const putSkinLayersInState = skinLayers => {
  return {
    type: GET_SKIN_LAYERS,
    payload: skinLayers
  };
};

export const getAllSkinLayers = () => (dispatch, getState) => {

  return axios
    .get("skinlayers/")
    .then(response => {
      dispatch(putSkinLayersInState(response.data));
    })
    .catch(error => error);
};


export const addSkinLayerToList = form => (dispatch, getState) => {
  const body = JSON.stringify(form);

  return axios.post(
    "skinlayer/new/",
    body,
  )
    .then(response => {
      console.log("response Post skinlayer", response);
    })
    .catch(err => err);
};
