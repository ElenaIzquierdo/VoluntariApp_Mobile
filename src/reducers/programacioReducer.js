const INITIAL_STATE ={
    setmanes: [
        {id:0, name: '07/01-11/01',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: 3, ass: 'baixa'},
        {id:1, name: '14/01-18/01',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: 4, ass: 'baixa'},
        {id:2, name: '21/01-25/01',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: 2, ass: 'baixa'},
        {id:3, name: '28/01-01/02',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: 2, ass: 'baixa'},
        {id:4, name: '04/02-08/02',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: 4, ass: 'baixa'},
        {id:5, name: '11/02-15/02',message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
                'avançar en el centre dinteres! Que vagi super be!!!', global_rate: null, ass: null},
        {id:6, name: '18/02-22/02',message:null, global_rate: null, ass: null},
        {id:7, name: '25/02-01/03',message:null, global_rate: null, ass: null},
        {id:8, name: '04/03-08/03',message:null, global_rate: null, ass: null},
        {id:9, name: '11/03-15/03',message:null, global_rate: null, ass: null},
        {id:10, name: '18/03-22/03',message:null, global_rate: null, ass: null},
        {id:11, name: '25/03-29/03',message:null, global_rate: null, ass: null},
        {id:12, name: '01/04-05/04',message:null, global_rate: null, ass: null},
        {id:13, name: '08/04-12/04',message:null, global_rate: null, ass: null},
    ]
}

const programacioReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_SETMANES':
            return state;
        case 'ISHIDEN_CHANGE':
            return {...state, isHiden: !state.isHiden}

        default: return state
    }
};

export {programacioReducer}
