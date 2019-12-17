export const changeIteratorNextParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATOR_NEXT_PARAM',
        data: {
            iterator:iterator
        }
    }
};

export const changeIteratorPreviousParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATOR_PREV_PARAM',
        data: {
            iterator:iterator
        }
    }
};

export const changeSwitch = (value) =>{
    return{
        type: 'CHANGE_SWITCH',
        data: {
            valueSwitch: value
        }
    }
};

export const fetchPreviousEvents = () => {
    return (dispatch) => {
        dispatch(requestEvents());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event-before';
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receivePreviousEvents(body)))
            );  
    }
}

const requestEvents = () =>{
    return{
        type: 'REQUEST_EVENTS'
    }
}

const receivePreviousEvents =(previousEvents)=>{
    return {
        type: 'RECEIVE_PREVIOUS_EVENTS',
        data: previousEvents
    }
}

export const fetchNextEvents = () => {
    return (dispatch) => {
        dispatch(requestEvents());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event-after';
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveNextEvents(body)))
            );  
    }
}

const receiveNextEvents =(nextEvents)=>{
    return {
        type: 'RECEIVE_NEXT_EVENTS',
        data: nextEvents
    }
}
