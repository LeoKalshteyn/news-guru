import * as retrieve from './constants';

let initialState = { isFetching: true, articles:[], hasError:false, errorMsg: "" };

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case retrieve.RETRIEVING_HEADLINES:{
            let isFetching = (state.articles.length > 0) ? false : true;

            return {...state, isFetching, hasError:false};
        }
    }
};

export default homeReducer;
