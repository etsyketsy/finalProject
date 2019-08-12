import { GET_PASSAGE } from "../types";
import axios from '../../axios'

const putPassageInState = passage => {
  return {
    type: GET_PASSAGE,
    payload: passage
  };
};

export const getAllPassages = () => (dispatch, getState) => {
  const token = getState().authorizationReducer.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios
    .get("passages/", config)
    .then(response => {
      let passages = {};
      const levelCounter = (children, level=0) => {
        const l = level;

        for (const p of children) {
          p.level = l;
          if (!passages[l]) {
            passages[l] = []
          }
          passages[l].push(p);
          if (p.passages.length > 0) {
            levelCounter(p.passages, level= l + 1)
          }
        }
      };
      levelCounter(response.data);
      dispatch(putPassageInState(passages));
    });
};

export const addPassageToList = form => (dispatch, getState) => {
  // const token = getState().authorizationReducer.token;
  const body = JSON.stringify(form);
  console.log('body in Passage Fetch:', body)

  return axios.post(
    "passage/new/",
    body,
  )
    .then(response => {
      console.log("response in passage", response);
    })
    .catch(err => err);
};
