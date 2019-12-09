const INITIAL_STATE ={
    user:{
        id: 0,
        nom: 'Elena',
        cognom: 'Izquierdo',
        correu: 'eizquierdograu@gmail.com',
        grup: 'Petits',
        centre: 'Raval',
        dies: [true,false,true,false,false],
        profilephotoURI: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FVoluntariAppMobile-5a525f5f-b0f3-4e2b-979c-ad33eb315826/ImagePicker/8e4f835f-3629-452d-9493-0259879c2f44.jpg"

    },
    modified: false
};

const profileReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return state;

        case 'CHANGE_CHECKED_DAY':
            const new_user = {...state.user};
            if(new_user.dies[action.data.day]){
                new_user.dies[action.data.day] = false
            }
            else new_user.dies[action.data.day] = true
            return {...state, user: new_user};

        case 'CHANGE_PROFILE_PICTURE':
            const new_user_2 = {...state.user}
            new_user_2.profilephotoURI = action.data.uri
            return {...state, user: new_user_2};

        case 'SET_TRUE_MODIFIED_ATTRIBUTE':
            return {...state, modified: true}

        case 'SET_FALSE_MODIFIED_ATTRIBUTE':
            return {...state, modified: false}

        default: return state
    }
};

export {profileReducer}
