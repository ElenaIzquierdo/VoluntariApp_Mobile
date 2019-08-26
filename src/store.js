import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import {forumReducer} from "./reducers/forumReducer";
import {forumthemeReducer} from "./reducers/forumthemeReducer";
import {eventReducer} from "./reducers/eventReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    forumReducer: forumReducer,
    forumthemeReducer: forumthemeReducer,
    eventReducer: eventReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
