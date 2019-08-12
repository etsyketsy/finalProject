const initialState = { active: '' };

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE': {
          if (action.payload === state.active) {
            return { ...state, active: '' }
          }
          return { ...state, active: action.payload }
        }
        default:
            return state
    }
};

export default generalReducer;
