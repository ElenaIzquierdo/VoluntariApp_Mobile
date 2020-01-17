import { Actions } from "react-native-router-flux";
import {request} from "../request";

export const changeCreateTopicFormProperty=(propertyName, value) =>{
    return {
        type:'CHANGE_PROPERTY_CRATE_TOPIC',
        data:{
            propertyName,
            value
        }
    }
};

export const createForumTopic=(topicInfo) =>{
    return () => {
        request('/forum', 'POST', topicInfo);
        Actions.forum();
    }   
}

export const changeErrorValue=(value)=>{
    return{
        type:'CHANGE_ERROR_VALUE',
        data: {
            value
        }
    }
}

export const resetValues=()=>{
    return{
        type:'RESET_VALUES'
    }
}