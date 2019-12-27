import {AsyncStorage} from "react-native";
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
    console.log("value ",value)
    return{
        type: 'CHANGE_SWITCH',
        data: {
            valueSwitch: value
        }
    }
};

export const unAttendEvent = (id, value) => {
    console.log("event ",id)
    console.log("value ",value)
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/'+id+'/unattend';
            fetch(baseUrl, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) => {
                if(resp.ok)dispatch(changeSwitch(value))
            })
        });
    }
}

export const attendEvent = (id, value) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/'+id+'/attendee';
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) => {
                console.log(resp)
                if(resp.ok)dispatch(changeSwitch(value))
            })
        });
    }
}

export const fetchPreviousEvents = () => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event-before';
            dispatch(requestEvents())
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) => {
                    resp.json().then((body) =>
                    dispatch(receivePreviousEvents(body)))
                })
        });
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
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event-after';
            dispatch(requestEvents())
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) => {
                    resp.json().then((body) =>
                    dispatch(receiveNextEvents(body)))
                })
        });
    }
}


const receiveNextEvents =(nextEvents)=>{
    return {
        type: 'RECEIVE_NEXT_EVENTS',
        data: nextEvents
    }
}
