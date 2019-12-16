const INITIAL_STATE ={
    setmanes: [],
    isFetching: false
}

const programacioReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_SETMANES':
            return state;
        case 'REQUEST_WEEKS':
            return {...state, isFetching: true}
        case 'RECEIVE_WEEKS':
            return {...state, setmanes:action.data, isFetching: false}

        default: return state
    }
};

export {programacioReducer}
