
import * as retrieve from './constants';

export function getNewsHeadlines(country = "us") {
    return (dispatch) => {
        dispatch({type: retrieve.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {
        })
    };
}

export function getHeadlinesBySource(source) {
    return (dispatch) => {
    };
}
