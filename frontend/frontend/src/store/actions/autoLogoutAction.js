import { logoutAction } from "./loginAction";
import { LOGOUT_WARNING } from "../types";

export const logoutWarning = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch({
      type: LOGOUT_WARNING
    });
    // setTimeout(() => {
    //     dispatch(logoutAction())
    // }, 3000)
  }
};

// export const userIsActive = () => (dispatch, getState) => {
//     setTimeout(() => {
//         alert('You must be logged in!')
//         dispatch(logoutWarning())
//     }, 3000)
// }
