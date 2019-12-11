export const closeModal =() => {
    return{
        type: 'CLOSE_MODAL'
    }
};

export const fetchClosedForumTopics = () => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=closed';
        fetch(baseUrl, {
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

export const fetchOpenedForumTopics = () => {
    return (dispatch) => {
        dispatch(requestForumTopics());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum?status=open';
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

const receiveOpenedForumTopics =(openedTopics)=>{
    return {
        type: 'RECEIVE_OPENED_TOPICS',
        data: openedTopics
    }
}
