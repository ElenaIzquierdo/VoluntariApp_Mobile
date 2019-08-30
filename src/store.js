import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import {forumReducer} from "./reducers/forumReducer";
import {forumthemeReducer} from "./reducers/forumthemeReducer";
import {eventReducer} from "./reducers/eventReducer";
import {centreinteresReducer} from "./reducers/centreinteresReducer";
import {programacioReducer} from "./reducers/programacioReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    forumReducer: forumReducer,
    forumthemeReducer: forumthemeReducer,
    eventReducer: eventReducer,
    centreinteresReducer: centreinteresReducer,
    programacioReducer: programacioReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
