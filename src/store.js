import { createStore, combineReducers } from 'redux';
import {homeReducer} from "./reducers/homeReducer";

const rootReducer = combineReducers({
    homeReducer: homeReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
