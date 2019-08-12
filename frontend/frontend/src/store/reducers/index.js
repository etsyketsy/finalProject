import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authorizationReducer from "./authorizationReducer";
import biopsyReducer from "./biopsyReducer";
import donorReducer from "./donorReducer";
import subBiopsyReducer from "./subBiopsyReducer";
import skinLayerReducer from "./skinLayerReducer";
import cellTypeReducer from './cellTypeReducer';
import autoLogoutReducer from './autoLogoutReducer';
import passageReducer from "./passageReducer";
import modalNotification from "./modalNotification";
import generalReducer from "./generalReducer";
import plotDataReducer from "./plotDataReducer";

const rootReducer = combineReducers({
  userReducer,
  authorizationReducer,
  biopsyReducer,
  donorReducer,
  subBiopsyReducer,
  skinLayerReducer,
  cellTypeReducer,
  autoLogoutReducer,
  passageReducer,
  modalNotification,
  generalReducer,
  plotDataReducer
});

export default rootReducer;
