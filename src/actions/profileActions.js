export const changeCheckedDay = (day) =>{
    return{
        type: 'CHANGE_CHECKED_DAY',
        data: {
            day: day
        }
    }
}

export const updateProfilePicture = (uri) =>{
    return{   
        type: 'CHANGE_PROFILE_PICTURE',
        data: { uri: uri }
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

//Aqui s'haura de guardar a base de dades tots els canvis i shaura de fer que l'usuari atendra els dies indicats
export const saveChanges = () =>{
    return{
        type: 'SET_FALSE_MODIFIED_ATTRIBUTE',
    }
}