const INITIAL_STATE ={
    event: {},
    isFetching: false
};

const provaReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FECTH_EVENT':
            return state
        
        case 'REQUEST_EVENT':
            return {...state, isFetching:true}
        
        case 'RECEIVE_EVENT':
            return {
                ...state,
                event: action.data,
                isFetching:false
            }

        default: return state
    }
};

export {provaReducer}
