import {createStore,applyMiddleware} from 'redux';
import trunk from 'react-trunk';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(trunk));

export default store;