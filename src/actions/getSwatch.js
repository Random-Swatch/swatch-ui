import fetch from 'cross-fetch'

export const GET_SWATCH = "GET_SWATCH"

function requestSwatch() {
    return {
        type: GET_SWATCH
    }
}

export const RECEIVE_SWATCH = "RECEIVE_SWATCH"

function receiveSwatch(json) {
    return {
        type: RECEIVE_SWATCH,
        data: json
    }
}

export const RECEIVE_ERROR = "RECEIVE_ERROR"

function receiveError(message) {
    console.error(`Error occurred while generating the swatch ${message}`)
    return {
        type: RECEIVE_ERROR,
        message: message
    }
}

export function getSwatch() {
    return function (dispatch) {

        dispatch(requestSwatch())
        return fetch(`http://localhost:8007/swatch`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error("Oops! Something went wrong!")
                }
            })
            .then(
                json => dispatch(receiveSwatch(json))
            )
            .catch(function (error) {
                dispatch(receiveError(error.message))
            })
    }
}

