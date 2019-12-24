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
    isFetching: false,
    days: [false,false,false,false,false]
};

const profileReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'REQUEST_USER_PROFILE':
            return {...state, isFetching: true}
        case 'RECEIVE_USER_PROFILE':
            var i;
            const new_days = state.days
            for(i =0; i < 5; i++){
                if(action.data.profile.days[i] == 1){
                    new_days[i] = true
                }
                else{
                    new_days[i]=false
                }
            }
            return {...state, user: action.data, isFetching: false, days: new_days}

        default: return state
    }
};

export {profileReducer}
