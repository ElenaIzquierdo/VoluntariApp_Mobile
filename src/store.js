import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import {forumReducer} from "./reducers/forumReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    forumReducer: forumReducer,
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
