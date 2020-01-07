const INITIAL_STATE ={
    event: {id:0,title:'Casal divendres 12',data:'12/05/2019', hora: '16:00', type: 'Casal', rate:4,
        grup: 'Grup Petits', rate_description: 'El JC porta tota la setmana molt distret. ' +
            'El WB estava molt alterat i ha arribat plorant del cole.' ,
        assMonitors: 'baixa', assInfants: 'mitja', activitat: 'Intentarem treballar els sentits: olfacte, gust, vista, ' +
            'tacte i oïda. '},
    isDisabled: false,
    isHiden: true,
    isFetching: false
}

const eventReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;
        case 'ISHIDEN_CHANGE':
            return {...state, isHiden: !state.isHiden}
        case 'REQUEST_EVENT':
            return {...state, isFetching: true}
        case 'RECEIVE_EVENT':
            return {...state, isFetching: false, event: action.data}

        default: return state
    }
};

export {eventReducer}
