export const closeModal =() => {
    return{
        type: 'CLOSE_MODAL'
    }
};

export const fetchClosedForumTopics = (order) => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=closed';
        const url1 = '&sort='+order
        fetch(baseUrl+url1, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveClosedForumTopics(body)))
            );
    }
}

const requestForumTopics = () =>{
    return{
        type: 'REQUEST_FORUM_TOPICS'
    }
}

const receiveClosedForumTopics =(closedTopics)=>{
    return {
        type: 'RECEIVE_CLOSED_TOPICS',
        data: closedTopics
    }
}

export const fetchOpenedForumTopics = (order) => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=open';
        const url1 = '&sort='+order
        fetch(baseUrl+url1, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveOpenedForumTopics(body)))
            );
    }
}

const receiveOpenedForumTopics =(openedTopics)=>{
    return {
        type: 'RECEIVE_OPENED_TOPICS',
        data: openedTopics
    }
}

export const changeFilterProperty=(propertyName) =>{
    return {
        type:'CHANGE_FILTER_PROPERTY',
        data:{
            propertyName
        }
    }
};

export const fetchFilteredTopics = (order) => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum';
        if(status != ""){
            const url1 = '?status='+status
            const url2 = '&order='+order
            const url = baseUrl + url1 + url2
            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveOpenedForumTopics(body)))
                );
        }
        
       
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveOpenedForumTopics(body)))
            );
    }
}
