import {initialState} from './initialState/index';
import createRootReducer from '../reducers/index';
import {createStore} from 'redux';

export const configureStore = () => {
    const store = createStore(createRootReducer(), initialState);
    return store;
};