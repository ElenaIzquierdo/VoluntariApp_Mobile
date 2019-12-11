const INITIAL_STATE ={
    opened_topics:[],
    closed_topics:[],
    isOpen: false,
    isFetching: false,
    filters:{
        closed: true,
        opened: true, 
        order_by_name: false,
        order_by_date: true
    }
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
        
        case 'CHANGE_FILTER_PROPERTY':
            let new_filters = {...state.filters}
            new_filters[action.data.propertyName]=!new_filters[action.data.propertyName]
            if(action.data.propertyName === "order_by_name"){
                new_filters["order_by_date"]=!new_filters["order_by_date"]
            }
            if(action.data.propertyName === "order_by_date"){
                new_filters["order_by_name"]=!new_filters["order_by_name"]
            }
            return {...state, filters: new_filters}

        default: return state
    }
};

export {forumReducer}
