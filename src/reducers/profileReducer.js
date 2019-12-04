const INITIAL_STATE ={
    user:{
        id: 0,
        nom: 'Elena',
        cognom: 'Izquierdo',
        correu: 'eizquierdograu@gmail.com',
        grup: 'Petits',
        projecte: 'COPI',
        dies: [true,false,true,false,false],
        profilephoto: require('../images/user1.jpg')
    }
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

        default: return state
    }
};

export {profileReducer}
