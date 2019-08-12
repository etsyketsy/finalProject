import axios from "../../axios";
import { getAllDonors } from "../actions/dashboardActions";
import { getAllBiopsies } from "../actions/biopsyActions";
import { getAllSubBiopsies } from "../actions/subBiopsyActions";
import { getAllSkinLayers } from "../actions/skinLayerAction";
import { getAllCellTypes } from "../actions/cellTypeAction";
import { getAllPassages } from "./passageActions";
import { getCurrentUser } from "./userAction";

export const checkLoginAction = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch({
      type: "login",
      payload: token
    });
    dispatch(getAllDonors());
    dispatch(getAllBiopsies());
    dispatch(getAllSubBiopsies());
    dispatch(getAllSkinLayers());
    dispatch(getAllCellTypes());
    dispatch(getAllPassages());
    dispatch(getCurrentUser());
  }
};

export const logoutAction = () => (dispatch, getState) => {
  localStorage.clear();
  dispatch({
    type: "logout"
  });
};

export const loginAction = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post("https://eskin.propulsion-learn.ch/backend/api/token/", payload);

    dispatch({
      type: "login",
      payload: res.data.access
    });
    return res;
  } catch (error) {
    let msg;
    if (!error.response) {
      msg = ["Something bad happened!"];
    } else {
      msg = error.response.data;
    }
    dispatch({
      type: "error",
      payload: msg
    });
  }
};
