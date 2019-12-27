import {AsyncStorage} from "react-native";

export const fetchWeek = (id) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            dispatch(requestWeek());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/week/';
            const finalPath = baseUrl + id;
            fetch(finalPath, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveWeek(body)))
                );
        });
    }
}

const requestWeek = () =>{
    return{
        type: 'REQUEST_WEEK'
    }
}

const receiveWeek =(week)=>{
    return {
        type: 'RECEIVE_WEEK',
        data: week
    }
}

export const fetchActivitiesFromWeek = (weekid) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            dispatch(requestActivitiesFromWeek());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/week/'+weekid;
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveActivitiesFromWeek(body)))
                );
        })    
    }
}

const requestActivitiesFromWeek = () =>{
    return{
        type: 'REQUEST_ACTIVITIES_FROM_WEEK'
    }
}

const receiveActivitiesFromWeek =(activities)=>{
    return {
        type: 'RECEIVE_ACTIVITIES_FROM_WEEK',
        data: activities
    }
}

export const changeSwitchForDay = (id, value) =>{
    return{
        type: 'CHANGE_SWITCH_WEEK',
        data: {
            id: id,
            value: value
        }
    }
}

export const unAttendEvent = (id, value) => {
    console.log("event ",id)
    console.log("value ",value)
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
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
                if(resp.ok)dispatch(changeSwitchForDay(id, value))
            })
        });
    }
}

export const attendEvent = (id, value) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
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
                if(resp.ok)dispatch(changeSwitchForDay(id, value))
            })
        });
    }
}
