import {handleActions} from 'redux-actions';
import {actions} from '../actions/index';
import {repos} from '../repos';
import {initialState} from '../store/initialState';


// todo わかんない
const messages = handleActions(
    {
        [`${actions.messages.submit}`](state, action) {
            return repos.messages.addMessage(state, action.payload);
        },
        [`${actions.messages.change}`](state, action) {
            return repos.messages.changeText(state, action.payload);
        },
    },
    initialState
);

export {messages};