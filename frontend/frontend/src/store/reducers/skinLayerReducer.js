import {GET_SKIN_LAYERS, FILTER_SKINLAYERS} from "../types";
import {
    getAllSkinLayers,
    addSkinLayerToList
} from "../actions/skinLayerAction";
import moment from "moment";

const initialState = {
    title: "Skin Layers",
    url: "skinlayer",
    fetching: addSkinLayerToList,
    reRender: getAllSkinLayers
};

const skinLayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SKIN_LAYERS: {
            const elements = action.payload

            const dateChangedAll = () => {
                elements.map(element=>{
              element.separation_time =  moment(element.separation_time).format("Do MMMM YYYY, h:mm")
                    return element
                })
            }
            dateChangedAll()
            const newState = {
                ...state,
                skinLayers: action.payload,
                OrigskinLayers: action.payload,
                error: null
            };
            return newState;
        }
        case FILTER_SKINLAYERS: {
            const newState = {
                ...state,
                skinLayers: state.OrigskinLayers.filter(b => {

                    return action.payload.includes(b.sub_biopsy_numbering);
                }),
                error: null
            };
            return newState;
        }
        case "REMOVE_ALL_FILTER": {
            return {
                ...state,
                skinLayers: state.OrigskinLayers
            };
        }
        default:
            return state;
    }
};

export default skinLayerReducer;
