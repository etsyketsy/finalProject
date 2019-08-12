import { GET_PLOT_DATA } from "../types";


const initialState = {
  title: "Plot",
  url: "plots",
};

const plotDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLOT_DATA: {
      return {
        ...state,
        plotData: action.payload,
        error: null
      };
    }
    default:
      return state;
  }
};

export default plotDataReducer;
