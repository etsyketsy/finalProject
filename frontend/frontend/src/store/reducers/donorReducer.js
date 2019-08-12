import { ADD_DONORS} from "../types";
import { addDonorToList, getAllDonors } from "../actions/dashboardActions";

const initState = {
  title: "Donors",
  url: "donor",
  fetching: addDonorToList,
  reRender: getAllDonors,
  biopsySelected: ""
};

const donorReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_DONORS: {
      const newState = { ...state, donor: action.payload, error: null };
      return newState;
    }
    case "add_donor": {
      const newState = { ...state, donor: action.payload };
      return newState;
    }

    default:
      return state;
  }
};

export default donorReducer;
