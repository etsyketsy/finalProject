import {GET_CELL_TYPES, FILTER_CELL_TYPES} from "../types";

import {getAllCellTypes, addCellTypeToList} from "../actions/cellTypeAction";
import moment from "moment";

const initialState = {
    title: "Cell Types",
    url: "celltypes",
    fetching: addCellTypeToList,
    reRender: getAllCellTypes
};

const cellTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CELL_TYPES: {
            const elements = action.payload

            const dateChangedAll = () => {
                const newArray = elements.map(element => {
                    element.digestion_time = moment(element.digestion_time).format("Do MMMM YYYY, h:mm")
                    element.centrifugation_time = moment(element.centrifugation_time).format("Do MMMM YYYY, h:mm")

                    return element
                })
            }
            dateChangedAll()
            const newState = {
                ...state,
                cellTypes: action.payload,
                origCellTypes: action.payload,

                error: null
            };
            return newState;
        }
        case FILTER_CELL_TYPES: {
            const newState = {
                ...state,
                cellTypes: state.origCellTypes.filter(b => {

                    return action.payload.includes(b.skin_layer_numbering);
                }),
                error: null
            };
            return newState;
        }
        case "REMOVE_ALL_FILTER": {
            return {
                ...state,
                cellTypes: state.origCellTypes
            };
        }
        default:
            return state;
    }
};

export default cellTypeReducer;
