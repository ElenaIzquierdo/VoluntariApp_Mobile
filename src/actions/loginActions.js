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