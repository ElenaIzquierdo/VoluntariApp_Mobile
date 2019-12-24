import { Actions } from "react-native-router-flux";
import {requestNoToken} from "../requestNoToken";
export const changeRegisterFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY',
        data:{
            propertyName,
            value
        }
    }
};

export const changeCheckedDay = (day) =>{
    return{
        type: 'CHANGE_CHECKED_DAY',
        data: {
            day: day
        }
    }
};

export const changeErrorRegisterMapProperty=(propertyName) =>{
    return {
        type:'CHANGE_ERROR_PROPERTY',
        data:{
            propertyName
        }
    }
};

export const resetErrorRegisterMap=() =>{
    return{
        type: 'RESET_ERROR_MAP'
    }
}

export const registerUser=(userInfo) =>{
    return () => {
        requestNoToken('/users', 'POST', userInfo);
        Actions.login();
    } 
}