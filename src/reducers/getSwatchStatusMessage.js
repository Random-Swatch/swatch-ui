import {RECEIVE_ERROR} from "../actions/getSwatch";

const getSwatchStatusMessage = (state, action) => {
    return action.type === RECEIVE_ERROR ? action.message : ""
}

export default getSwatchStatusMessage