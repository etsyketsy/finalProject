import axios from '../../axios'

export const exportFiles = () => (dispatch, getState) => {
    const token = getState().authorizationReducer.token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }, responseType: 'blob',
    };
  
    return axios
      .get("/exports/celltypes/xls/", config)
      .then(response => {
        return response
      })
      .catch(error => error);
  };