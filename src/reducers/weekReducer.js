const INITIAL_STATE ={
    message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
        'avançar en el centre dinteres! Que vagi super be!!!',
    setmana: [
        {id:0, name: 'Dilluns',date: '07/01/2019', hora: '16:00', attendee: true},
        {id:1, name: 'Dimarts', date: '08/01/2019', attendee: false},
        {id:2, name: 'Dimecres', date: '09/01/2019', attendee: true},
        {id:3, name: 'Dijous', date: '10/01/2019', attendee: false},
        {id:4, name: 'Divendres', date: '11/01/2019', attendee: false}
    ],
    switchValue: false
}

const weekReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_WEEK':
            return state;
        case 'CHANGE_SWITCH':
            var new_setmana = state.setmana;
            new_setmana[action.data.day].attendee = true
            return {...state, setmana: new_setmana}

        default: return state
    }
};

export {weekReducer}
