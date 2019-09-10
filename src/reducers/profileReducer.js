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

        default: return state
    }
};

export {profileReducer}
