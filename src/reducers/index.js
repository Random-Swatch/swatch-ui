import {combineReducers} from 'redux'
import colors from './colors'
import getSwatchStatus from './getSwatchStatus'
import getSwatchStatusMessage from './getSwatchStatusMessage'

export default combineReducers({
    colors,
    getSwatchStatus,
    getSwatchStatusMessage
})
