import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import {forumReducer} from "./reducers/forumReducer";
import {forumthemeReducer} from "./reducers/forumthemeReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    forumReducer: forumReducer,
    forumthemeReducer: forumthemeReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
