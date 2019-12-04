export const changeSwitchForDay = (day) =>{
    return{
        type: 'CHANGE_SWITCH_WEEK',
        data: {
            day: day
        }
    }
}
