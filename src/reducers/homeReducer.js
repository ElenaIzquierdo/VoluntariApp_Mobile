const INITIAL_STATE ={
    events_next:[
        {},
    ],
    events_previous:[
        {},
    ],
    iterator_next: 0,
    iterator_previous: 0,
    isDisabled: false,
    switchValue: false,
    isFetching: false
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return state;
        case 'CHANGE_ITERATOR_NEXT_PARAM':
            return { ...state, iterator_next: action.data.iterator};
        case 'CHANGE_ITERATOR_PREV_PARAM':
            return { ...state, iterator_previous: action.data.iterator};
        case 'CHANGE_SWITCH':
            var new_eventsNext = state.events_next;
            new_eventsNext[state.iterator_next].attending = action.data.valueSwitch
            return {...state, events_next: new_eventsNext, switchValue: action.data.valueSwitch,}
        
        case 'REQUEST_EVENTS':
            return {...state, isFetching: true}

        case 'RECEIVE_PREVIOUS_EVENTS':
            return {
                ...state, 
                events_previous: action.data, 
                isFetching: false
            }

        case 'RECEIVE_NEXT_EVENTS':
            return {
                ...state, 
                events_next: action.data, 
                isFetching: false
            }

        default: return state
    }
};

export {homeReducer}
