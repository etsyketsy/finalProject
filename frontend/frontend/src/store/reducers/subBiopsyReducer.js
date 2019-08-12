import {GET_SUBBIOPSIES, FILTER_SUBBIOPSIES} from "../types";

import {
    addSubBiopsyToList,
    getAllSubBiopsies
} from "../actions/subBiopsyActions";

const initialState = {
    title: "Sub-Biopsy",
    url: "subbiopsy",
    fetching: addSubBiopsyToList,
    reRender: getAllSubBiopsies
};

const subBiopsyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBBIOPSIES: {
            const newState = {
                ...state,
                origSubBiopsies: action.payload,
                subBiopsies: action.payload,
                error: null
            };
            return newState;
        }
        case FILTER_SUBBIOPSIES:
            const newState = {
                ...state,
                subBiopsies: state.origSubBiopsies.filter(b => {
                    return action.payload.includes(b.biopsy_numbering);
                })
            };
            return newState;
        case "REMOVE_ALL_FILTER": {
            return {
                ...state,
                subBiopsies: state.origSubBiopsies
            };
        }
        default:
            return state;
    }
};

export default subBiopsyReducer;
