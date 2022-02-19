import {createStore} from 'redux'
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhansers = composeWithDevTools();
const store = createStore(rootReducer,composeEnhansers);

export default store;   