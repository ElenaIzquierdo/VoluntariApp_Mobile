import {AsyncStorage} from "react-native";
export const fetchExplicacions = (centreInteresId) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            dispatch(requestExplicacions());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/explicacio/centreinteres-no-pagination/';
            
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
        })
          
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
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            dispatch(requestObjectius());
            const baseUrl = 'http://127.0.0.1:8000/voluntariapp/objectiu/centreinteres-no-pagination/';
            
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
        })
          
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
