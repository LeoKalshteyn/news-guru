import axios from 'axios';

import * as retrieve from './constants';

export function getNewsHeadlines(country = "us") {
    return (dispatch) => {
        dispatch({type: retrieve.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {
            const url = `${retrieve.API_URL}country=${country}&apiKey=${retrieve.API_KEY}&pageSize=20`;
            axios.get(url)
                .then(res => res.data)
                .then((data) => {
                    dispatch({type: retrieve.HEADLINES_AVAILABLE, data})
                    resolve()
                })
                .catch(error => {
                    dispatch({type: retrieve.HEADLINES_ERROR, error})
                    reject()
                });
        })
    };
}

export function getHeadlinesBySource(source) {
    return (dispatch) => {
        dispatch({type: retrieve.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {
            const url = `${retrieve.API_URL}sources=${source}&apiKey=${retrieve.API_KEY}&pageSize=20`;
                axios.get(url)
                .then(res => res.data)
                .then((data) => resolve(data))
                .catch(error => reject(error));
        })
    };
}
