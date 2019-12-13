export const fetchForumTopic = (id) => {
    return (dispatch) => {
        dispatch(requestTopic());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/forum/';
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
                dispatch(receiveTopic(body)))
            );
    }
}

const requestTopic = () =>{
    return{
        type: 'REQUEST_TOPIC'
    }
}

const receiveTopic =(topic)=>{
    return {
        type: 'RECEIVE_TOPIC',
        data: topic
    }
}

export const fetchForumTopicComments = (id) => {
    return (dispatch) => {
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/comment/forum/';
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
                dispatch(receiveTopicComments(body)))
            );
    }
}

const receiveTopicComments =(comments)=>{
    return {
        type: 'RECEIVE_TOPIC_COMMENTS',
        data: comments
    }
}