import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/homeReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
});

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export {store}
