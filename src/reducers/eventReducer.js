const INITIAL_STATE ={
    event: {id:0,title:'Casal dilluns 15',data:'15/05/2019', hora: '16:00'},
    event_2: {id:0,title:'Casal divendres 12',data:'12/05/2019', hora: '16:00', rate:4},
}

const eventReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;

        default: return state
    }
};

export {eventReducer}
