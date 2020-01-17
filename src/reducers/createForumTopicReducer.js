const INITIAL_STATE ={
    title: "",
    description: "",
    group: "",
    group_choices: ["Casalet", "Petits", "Mitjans", "Grans", "Adolescents"],
    error_value: false
};

const createForumTopicReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY_CRATE_TOPIC':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        case 'CHANGE_ERROR_VALUE':
                return {...state, error_value: action.data}
        case 'RESET_VALUES':
                return {...state, title: "", description: "", group: "", error_value: false}

        default: return state
    }
};

export {createForumTopicReducer}