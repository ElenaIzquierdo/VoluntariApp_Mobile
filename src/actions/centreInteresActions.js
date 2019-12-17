export const fetchExplicacions = (centreInteresId) => {
    return (dispatch) => {
        dispatch(requestExplicacions());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/explicacio/centreinteres/';
        
        fetch(baseUrl+centreInteresId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveExplicacions(body)))
            );
          
    }
}

const requestExplicacions = () =>{
    return{
        type: 'REQUEST_EXPLICACIONS'
    }
}

const receiveExplicacions =(explicacions)=>{
    return {
        type: 'RECEIVE_EXPLICACIONS',
        data: explicacions
    }
}

export const fetchObjectius = (centreInteresId) => {
    return (dispatch) => {
        dispatch(requestObjectius());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/objectiu/centreinteres/';
        
        fetch(baseUrl+centreInteresId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveObjectius(body)))
            );
          
    }
}

const requestObjectius = () =>{
    return{
        type: 'REQUEST_OBJECTIUS'
    }
}

const receiveObjectius =(objectius)=>{
    return {
        type: 'RECEIVE_OBJECTIUS',
        data: objectius
    }
}
