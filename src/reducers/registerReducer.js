const INITIAL_STATE ={
    nom_usuari: "",
    correu: "",
    telf: "",
    grup: "",
    centre: "",
    password: "",
    password_repeted: "",
    dies: [false,false,false,false,false],
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
        default: return state
    }
};

export {registerReducer}
