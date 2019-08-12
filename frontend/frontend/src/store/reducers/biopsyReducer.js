import {GET_BIOPSIES, FILTER_BIOPSIES} from "../types";

import {addBiopsyToList, getAllBiopsies} from "../actions/biopsyActions";

const initialState = {
    title: "Biopsy",
    url: "biopsy",
    fetching: addBiopsyToList,
    reRender: getAllBiopsies
};

const biopsyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BIOPSIES: {
            const newState = {
                ...state,
                origBiopsies: action.payload,
                biopsies: action.payload,
                error: null
            };
            return newState;
        }
        case FILTER_BIOPSIES:
            const newState = {
                ...state,
                biopsies: state.origBiopsies.filter(b => {
                    return b.donor_numbering === action.payload;
                })
            };
            return newState;
        case "REMOVE_ALL_FILTER": {
            return {
                ...state,
                biopsies: state.origBiopsies
            };
        }
        default:
            return state;
    }
};

export default biopsyReducer;
