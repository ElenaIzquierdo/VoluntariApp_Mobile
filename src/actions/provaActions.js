export const fetchEvent = (id) => {
    console.log("HOLA fetchEvent")
    return (dispatch) => {
        dispatch(requestEvent());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/event/';
        const finalPath = baseUrl + id;
        fetch(finalPath, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveEvent(body)))
            );
    }
}

const requestEvent = () =>{
    console.log("HOLA requestEvent")
    return{
        type: 'REQUEST_EVENT'
    }
}

const receiveEvent =(event)=>{
    console.log("HOLA receiveEvent ", event)
    return {
        type: 'RECEIVE_EVENT',
        data: event
    }
}