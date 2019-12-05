export const changeSwitchForDay = (day) =>{
    return{
        type: 'CHANGE_SWITCH_WEEK',
        data: {
            day: day
        }
    }
}

export const setTrueModifiedAttribute = () =>{
    return{
        type: 'SET_TRUE_MODIFIED_ATTRIBUTE',
    }
}
//Aqui s'haura de restablir l'estat originial, s'haura de fet un get del estat inicial cridant a la base de dades
export const setFalseModifiedAttribute = () =>{
    return{
        type: 'SET_FALSE_MODIFIED_ATTRIBUTE',
    }
}

//Aqui s'haura de guardar a base de dades tots els canvis i shaura de fer que l'usuari atendra als esdeveniments indicats
export const saveChanges = () =>{
    return{
        type: 'SET_FALSE_MODIFIED_ATTRIBUTE',
    }
}
