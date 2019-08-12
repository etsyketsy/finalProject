import { addPassageToList, getAllPassages } from "../actions/passageActions";

import { GET_PASSAGE, FILTER_PASSAGE } from "../types";
import moment from "moment";

const initialState = {
  title: "Passage",
  url: "passage",
  fetching: addPassageToList,
  reRender: getAllPassages,
  passage: {},
  origPassage: {}
};
const passageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PASSAGE: {
        const dateChangedAll = () => {
          for (let key in action.payload) {

            action.payload[key].map(element => {
              element.digestion_time = moment(element.digestion_time).format("Do MMMM YYYY, h:mm")
              return element
            })
          }
          // const dateChangedAll = () => {
          //           elements1.map(element=>{
          //         element.digestion_time =  moment(element.digestion_time).format("Do MMMM YYYY, h:mm")
          //               return element
          //           })
          //   elements2.map(element=>{
          //         element.digestion_time =  moment(element.digestion_time).format("Do MMMM YYYY, h:mm")
          //               return element
          //           })
          //       }
        }
            dateChangedAll()
      return {
        ...state,
        passage: action.payload,
        origPassage: action.payload,
        error: null
      };
    }
    case FILTER_PASSAGE: {
      const newState = {
        ...state,
        passage: {},
        error: null
      };
      Object.keys(state.origPassage).map((key, index) => {
        if (action.payload.passage) {
          if (key > action.payload.level) {
            newState.passage[key] = state.origPassage[key].filter(b => {
              return action.payload.numbers.includes(b.passage_numbering);
            });
          } else {
            newState.passage[key] = state.origPassage[key];
          }
        } else {
          newState.passage[key] = state.origPassage[key].filter(b => {
            return action.payload.numbers.includes(b.cell_type_numbering);
          });
        }
      });
      return newState;
    }
    case "REMOVE_ALL_FILTER": {
      return {
        ...state,
        passage: state.origPassage
      };
    }
    default:
      return state;
  }
};

export default passageReducer;
