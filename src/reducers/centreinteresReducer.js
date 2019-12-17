const INITIAL_STATE ={
    objectius: [],
    explicacions: [],
    isFetching: false
}

const centreinteresReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;
        case 'REQUEST_EXPLICACIONS':
            return {...state, isFetching: true}
        case 'RECEIVE_EXPLICACIONS':
            return {...state, explicacions: action.data, isFetching: false}
        case 'REQUEST_OBJECTIUS':
            return {...state, isFetching: true}
        case 'RECEIVE_OBJECTIUS':
            return {...state, objectius: action.data, isFetching: false}

        default: return state
    }
};

export {centreinteresReducer}
