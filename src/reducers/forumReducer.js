const INITIAL_STATE ={
    opened_topics:[],
    closed_topics:[],
    isOpen: false,
    isFetching: false
};

const forumReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_TOPICS':
            return state;
        case 'CLOSE_MODAL':
            return {...state, isOpen: !state.isOpen};

        case 'REQUEST_FORUM_TOPICS':
            return{...state, isFetching: true};
        
        case 'RECEIVE_CLOSED_TOPICS':
            return {
                ...state,
                closed_topics: action.data,
                isFetching:false
            }

        case 'RECEIVE_OPENED_TOPICS':
            return {
                ...state,
                opened_topics: action.data,
                isFetching:false
            }

        default: return state
    }
};

export {forumReducer}
