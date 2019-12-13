const INITIAL_STATE ={
    theme: {},
    comments:[],
    participants:[
        {id:0, name: 'Elena Izquierdo', image:require('../images/user1.jpg')},
        {id:1, name: 'Julia Soler', image:require('../images/user2.jpeg')},
        {id:2, name: 'Laura Gonzalez', image:require('../images/user3.jpg')},
    ],
    tasks:[
        {id:0, title: 'Fer carta 1', assignees: ['Elena Izquierdo','Laura Gonzalez'], finished: false},
        {id:1, title: 'Crear personatge 1', assignees: ['Aida Gonzalez'], finished: true},
        {id:2, title: 'Crear personatge 2', assignees: ['Julia Soler'], finished: true},
        {id:3, title: 'Fer carta 2', assignees: ['Victor Gasol'], finished: true},
        {id:4, title: 'Preparar mural', assignees: ['Ema Formage'], finished: true}
    ],
    isFetching: false
}

const forumthemeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_THEME':
            return state;
        case 'REQUEST_TOPIC':
            return {...state, isFetching: true}
        case 'RECEIVE_TOPIC':
            return {...state, theme:action.data}
        case 'RECEIVE_TOPIC_COMMENTS':
                return {...state, comments:action.data, isFetching:false}

        default: return state
    }
};

export {forumthemeReducer}
