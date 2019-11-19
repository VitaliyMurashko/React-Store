import {combineReducers, createStore, applyMiddleware} from 'redux';
import catalogReducer from './Catalog-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
    catalogPage : catalogReducer,
    form : formReducer
});

const store = createStore(redusers,applyMiddleware(thunkMiddleware));
window.store = store

export default store;
