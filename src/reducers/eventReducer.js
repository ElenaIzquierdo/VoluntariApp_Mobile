const INITIAL_STATE ={
    event: {id:0,title:'Casal divendres 12',data:'12/05/2019', hora: '16:00', rate:4, grup: 'Grup Petits',
        rate_description: 'El JC porta tota la setmana molt distret. ' +
            'El WB estava molt alterat i ha arribat plorant del cole.' ,
        assMonitors: 'baixa', assInfants: 'mitja'},
    rate_event: {id: 0, rotllana: 1, respecte: 2, berenar: 0, files: 1, activitat: 1},
    isDisabled: false,
    isHiden: true
}

const eventReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;
        case 'ISHIDEN_CHANGE':
            return {...state, isHiden: !state.isHiden}

        default: return state
    }
};

export {eventReducer}
