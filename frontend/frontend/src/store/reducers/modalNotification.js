import { SHOW_MODAL, HIDE_MODAL } from '../types';

const initialState = {
    showModal: false
}

const modalNotification = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            const newState = { ...state };
            newState.showModal = true
            return newState;
        }
        case HIDE_MODAL: {
            const newState = { ...state };
            newState.showModal = false
            return newState;
        }
        default:
            return state;
    }
}

export default modalNotification;