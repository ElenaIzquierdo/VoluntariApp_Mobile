const INITIAL_STATE ={
    title: "",
    description: "",
    group: "",
    group_choices: ["Casalet", "Petits", "Mitjans", "Grans", "Adolescents"],
};

const createForumTopicReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY_CRATE_TOPIC':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;

        default: return state
    }
};

export {createForumTopicReducer}