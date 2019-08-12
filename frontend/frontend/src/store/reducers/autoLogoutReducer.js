import { LOGOUT_WARNING } from '../types'

const initState = {}

const autoLogoutReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGOUT_WARNING: {
            const newState = { 
                ...state, 
                showModal:true
            }
            console.log('in the autologout reducer', newState)
            return newState
        }
        default:
            return state
    }
}

export default autoLogoutReducer;
