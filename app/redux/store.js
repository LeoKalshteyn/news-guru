import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhancer(

export default store
