const INITIAL_STATE ={
    nom_usuari: "",
    correu: "",
    telf: "",
    grup: "",
    centre: "",
    password: "",
    password_repeted: "",
    dies: [false,false,false,false,false],
    errors: {
        days: false,
        username_empty: false,
        email_empty: false,
        email_repeated: false,
        telph_size_dif_9: false,
        group_empty: false,
        center_empty: false,
        password_size_dif_8: false,
        password_different: false
    }
};

const registerReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        case 'CHANGE_CHECKED_DAY':
            const new_dies = {...state.dies};
            if(new_dies[action.data.day]){
                new_dies[action.data.day] = false
            }
            else new_dies[action.data.day] = true
            return {...state, dies: new_dies};
        case 'CHANGE_ERROR_PROPERTY':
            const new_errors = {...state.errors}
            new_errors[action.data.propertyName]=true
            
            return {...state, errors: new_errors}
        case 'RESET_ERROR_MAP':
            errors_new= {
                days: false,
                username_empty: false,
                email_empty: false,
                email_repeated: false,
                telph_size_dif_9: false,
                group_empty: false,
                center_empty: false,
                password_size_dif_8: false,
                password_different: false
            }
            return {...state, errors:errors_new}

        default: return state
    }
};

export {registerReducer}
