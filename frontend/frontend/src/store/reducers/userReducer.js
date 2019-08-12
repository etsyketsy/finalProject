import { GET_USERS } from "../types";

const initState = {};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
