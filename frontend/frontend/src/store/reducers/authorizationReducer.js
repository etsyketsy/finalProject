import axios from "../../axios";

const initialState = { token: null, authenticated: false, error: null }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': {
          localStorage.setItem('token', action.payload);
          axios.defaults.headers.common = { 'Authorization': `Bearer ${action.payload}` };
          return  { ...state, token: action.payload, authenticated: true }
        }
        case 'error': {
          return  { ...state, token: null, authenticated: false, error: action.payload }
        }
        case 'logout': {
            return initialState
        }
        default:
            return state
    }
};

export default authReducer;
