import {combineReducers, createStore, applyMiddleware} from 'redux';
import catalogReducer from './Catalog-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    catalogPage : catalogReducer,
    form : formReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store

export default store;
