const INITIAL_STATE ={
    theme: {},
    comments:[],
    isFetching: false,
    modalOpen: false,
    new_comment: ''
}

const forumthemeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_THEME':
            return state;
        case 'REQUEST_TOPIC':
            return {...state, isFetching: true}
        case 'RECEIVE_TOPIC':
            return {...state, theme:action.data}
        case 'RECEIVE_TOPIC_COMMENTS':
                return {...state, comments:action.data, isFetching:false}
        case 'CHANGE_MODAL':
            var new_modalOpen= state.modalOpen
            new_modalOpen = !state.modalOpen
            return{...state, modalOpen: new_modalOpen}
        case 'CHANGE_NEW_COMMENT':
            return {...state, new_comment: action.data}

        default: return state
    }
};

export {forumthemeReducer}
