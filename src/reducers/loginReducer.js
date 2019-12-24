const INITIAL_STATE ={
    email: "",
    password: "", 
    errors: {
        email_empty: false,
        password_empty: false,
    },
    isFetching: false
};

const loginReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'CHANGE_PROPERTY':
            let result = {...state}
            result[action.data.propertyName]=action.data.value
            return result;
        
        case 'CHANGE_ERROR_PROPERTY':
            const new_errors = {...state.errors}
            new_errors[action.data.propertyName]=true
            
            return {...state, errors: new_errors}
        case 'RESET_ERROR_MAP':
            errors_new= {
                email_empty: false,
                password_empty: false,
            }
            return {...state, errors:errors_new}
        case 'RECEIVE_TOKEN':
            return {...state, isFetching: false}
        case 'REQUEST_LOGIN':
            return {...state, isFetching: true}

        default: return state
    }
};

export {loginReducer}
