const INITIAL_STATE ={
    message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
        'avançar en el centre dinteres! Que vagi super be!!!',
    setmana: [
        {id:0, name: 'Dilluns',date: '19/09/2019', hora: '16:00', attendee: true, finished: true},
        {id:1, name: 'Dimarts', date: '17/09/2019', attendee: false, finished: true},
        {id:2, name: 'Dimecres', date: '18/09/2019', attendee: true, finished: true},
        {id:3, name: 'Dijous', date: '19/09/2019', attendee: false, finished: true},
        {id:4, name: 'Divendres', date: '20/09/2019', attendee: false, finished: false}
    ],
    modified: false
}

const weekReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_WEEK':
            return state;

        case 'CHANGE_SWITCH_WEEK':
            const new_setmana = [...state.setmana];
            new_setmana[action.data.day].attendee = !new_setmana[action.data.day].attendee
            return {...state, setmana: new_setmana};

        case 'SET_TRUE_MODIFIED_ATTRIBUTE':
            return {...state, modified: true}

        case 'SET_FALSE_MODIFIED_ATTRIBUTE':
            return {...state, modified: false}
        default: return state
    }
};

export {weekReducer}
