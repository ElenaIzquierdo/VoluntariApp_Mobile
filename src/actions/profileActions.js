export const changeCheckedDay = (day) =>{
    return{
        type: 'CHANGE_CHECKED_DAY',
        data: {
            day: day
        }
    }
}

export const updateProfilePicture = (uri) =>{
    console.log("estic a accions per la foto de perfil")
    return{   
        type: 'CHANGE_PROFILE_PICTURE',
        data: { uri: uri }
    }
}