import {AsyncStorage} from "react-native";
export const fetchExplicacions = (centreInteresId) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            dispatch(requestExplicacions());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/schedule/centreinteres-no-pagination/';
            
            fetch(baseUrl+centreInteresId, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
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
    console.log("hola",explicacions)
    return {
        type: 'RECEIVE_EXPLICACIONS',
        data: explicacions
    }
}

export const fetchObjectius = (centreInteresId) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log("hola2")
            dispatch(requestObjectius());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/goal/centreinteres-no-pagination/';
            
            fetch(baseUrl+centreInteresId, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
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
