const INITIAL_STATE ={
    user:{
        "first_name": "Sergio",
        "last_name": "Paredes",
        "profile": {
            "mobile_phone": "697170484",
            "days": "11111",
            "group": "Petits"
        },
        "email": "sergio@gmail.com"
    },
    modified: false,
    isFetching: false,
    days: [false,false,false,false,false]
};

const profileReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return state;
        case 'CHANGE_CHECKED_DAY':
            const days_new = {...state.days};
            if(days_new[action.data.day]){
                days_new[action.data.day] = false
            }
            else days_new[action.data.day] = true
            return {...state, days: days_new};

        case 'SET_TRUE_MODIFIED_ATTRIBUTE':
            return {...state, modified: true}

        case 'SET_FALSE_MODIFIED_ATTRIBUTE':
            return {...state, modified: false}
        case 'REQUEST_USER_PROFILE':
            return {...state, isFetching: true}
        case 'RECEIVE_USER_PROFILE':
            var i;
            const new_days = [...state.days]
            for(i =0; i < 5; i++){
                if(state.user.profile.days[i] == 1){
                    new_days[i] = true
                }
            }
            return {...state, user: action.data, isFetching: false, days: new_days}

        default: return state
    }
};

export {profileReducer}
