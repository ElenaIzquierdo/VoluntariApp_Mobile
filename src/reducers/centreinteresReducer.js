import {CENTRE_INTERES_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    objectius: [],
    explicacions: [],
    isFetching: false
}

const centreinteresReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;
        case CENTRE_INTERES_ACTIONS.RequestExplicacions:
            return {...state, isFetching: true}
        case CENTRE_INTERES_ACTIONS.ReceiveExplicacions:
            return {...state, explicacions: action.data, isFetching: false}
        case CENTRE_INTERES_ACTIONS.RequestObjectius:
            return {...state, isFetching: true}
        case CENTRE_INTERES_ACTIONS.ReceiveObjectius:
            return {...state, objectius: action.data, isFetching: false}

        default: return state
    }
};

export {centreinteresReducer}
