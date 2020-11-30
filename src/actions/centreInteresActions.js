import {AsyncStorage} from "react-native";
import {CENTRE_INTERES_ACTIONS} from "../constants/actions";

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
        type: CENTRE_INTERES_ACTIONS.RequestExplicacions
    }
}

const receiveExplicacions =(explicacions)=>{
    return {
        type: CENTRE_INTERES_ACTIONS.ReceiveExplicacions,
        data: explicacions
    }
}

export const fetchObjectius = (centreInteresId) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
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
        type: CENTRE_INTERES_ACTIONS.RequestObjectius
    }
}

const receiveObjectius =(objectius)=>{
    return {
        type: CENTRE_INTERES_ACTIONS.ReceiveObjectius,
        data: objectius
    }
}
