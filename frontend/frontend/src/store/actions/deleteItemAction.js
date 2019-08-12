import axios from '../../axios'


export const deleteItem = (data) => (dispatch, getState) => {
  const url = data.url;
  const id = data.item
  return axios.delete(`${url}/${id}/`)
  .then(response => {
    return response})
};