const INITIAL_STATE ={
    nom_usuari: "",
    correu: "",
    telf: "",
    grup: "",
    centre: "",
    password: "",
    password_repeted: "",
    dies: [
        {id: 0, day_name: "dll", attendance: false},
        {id: 1, day_name: "dm", attendance: false},
        {id: 2, day_name: "dc", attendance: false},
        {id: 3, day_name: "dj", attendance: false},
        {id: 4, day_name: "dv", attendance: false}
    ],  
    errors: {
        days: false,
        username_empty: false,
        email_empty: false,
        email_repeated: false,
        telph_size_dif_9: false,
        group_empty: false,
        center_empty: false,
        password_size_dif_8: false,
        password_different: false,
        incorrect_email: false
    },
    group_choices: ["Casalet", "Petits", "Mitjans", "Grans", "Adolescents"],
    centre_choices: ["Raval", "Santa Coloma", "Sant Roc", "Sant Adrià", "Salt"]
};

const registerReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        case 'CHANGE_CHECKED_DAY':
            const new_dies = [...state.dies];
            if(new_dies[action.data.day].attendance){
                new_dies[action.data.day].attendance = false
            }
            else new_dies[action.data.day].attendance = true
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
