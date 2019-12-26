import {Actions} from "react-native-router-flux";
import { AsyncStorage } from "react-native";

export const changeLoginFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY',
        data:{
            propertyName,
            value
        }
    }
};

export const changeErrorLoginMapProperty=(propertyName) =>{
    return {
        type:'CHANGE_ERROR_PROPERTY',
        data:{
            propertyName
        }
    }
};

export const resetErrorLoginMap=() =>{
    return{
        type: 'RESET_ERROR_MAP'
    }
}

/*export const login = (loginInfo) => {
    return (dispatch) => {
        dispatch(requestLogin());
        const url = 'http://127.0.0.1:8000/voluntariapp/token';
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo)
        }).then((response) =>{
            if (response.ok) {
                return response.json().then(body => {
                    dispatch(receiveLogin(body))
                })
            } else {
                console.log('Error sending login. Status: ' + response.status);
            }
        }).catch(err => {
            console.log(err)
        })
          
    }
}*/

export const login = (loginInfo) =>{
    return(dispatch) => {
        fetch("http://165.22.76.147:8080/voluntariapp/token", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
        }).then((response) => {
            if(response.ok){
                return response.json().then(body => {
                    dispatch(receiveToken(body.access))
                })
            }
            else {
                console.log('Error sending login. Status: ' + response.status);
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const requestLogin=() =>{
    return{
        type: 'REQUEST_LOGIN'
    }
}

export const receiveToken=(token) =>{
    AsyncStorage.setItem('token', token, (err) => {
        if (err) {
            console.log('Error saving token: ' + token)
        }
        else{
            Actions.home();
        }
    });
    return{
        type: 'RECEIVE_TOKEN',
    }
}