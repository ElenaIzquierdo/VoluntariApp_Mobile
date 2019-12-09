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