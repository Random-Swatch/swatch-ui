import {RECEIVE_SWATCH} from "../actions/getSwatch";

const colors = (state = [], action) => {
    return action.type === RECEIVE_SWATCH ? action.data : []
}

export default colors