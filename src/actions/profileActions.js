import {AsyncStorage} from "react-native";

export const fetchUserProfile = () =>{
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            dispatch(requestUserProfile());
            fetch('http://165.22.76.147:8080/voluntariapp/user', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) => dispatch(receiveUserProfile(body))))
        });
    }
}

requestUserProfile = () =>{
    return{
        type: 'REQUEST_USER_PROFILE'
    }
}

receiveUserProfile = (userInfo) =>{
    return{
        type: 'RECEIVE_USER_PROFILE',
        data: userInfo
    }
}