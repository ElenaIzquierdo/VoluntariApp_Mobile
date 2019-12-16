import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import {forumReducer} from "./reducers/forumReducer";
import {forumthemeReducer} from "./reducers/forumthemeReducer";
import {eventReducer} from "./reducers/eventReducer";
import {centreinteresReducer} from "./reducers/centreinteresReducer";
import {programacioReducer} from "./reducers/programacioReducer";
import {weekReducer} from "./reducers/weekReducer";
import {taskReducer} from "./reducers/taskReducer";
import {profileReducer} from "./reducers/profileReducer";
import {registerReducer} from "./reducers/registerReducer";
import {loginReducer} from "./reducers/loginReducer";
import {provaReducer} from "./reducers/provaReducer";
import {createForumTopicReducer} from "./reducers/createForumTopicReducer";
import thunk from 'redux-thunk';
import { create } from 'uuid-js';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    forumReducer: forumReducer,
    forumthemeReducer: forumthemeReducer,
    eventReducer: eventReducer,
    centreinteresReducer: centreinteresReducer,
    programacioReducer: programacioReducer,
    weekReducer: weekReducer,
    taskReducer: taskReducer,
    profileReducer: profileReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    provaReducer: provaReducer,
    createForumTopicReducer: createForumTopicReducer
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
