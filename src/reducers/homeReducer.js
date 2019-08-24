const INITIAL_STATE ={
    events_next:[
        {id:0,title: "Casal dilluns 15",grup:"Grup Petits",dia:'15/05/2019',hora:'16:00'},
        {id:1,title: "Casal dimarts 16",grup:"Grup Petits",dia:'16/05/2019',hora:'16:00'},
        {id:2,title: "Casal dimecres 17",grup:"Grup Petits",dia:'17/05/2019',hora:'16:00'},
        {id:3,title: "Casal dijous 18",grup:"Grup Petits",dia:'18/05/2019',hora:'16:00'},
        {id:4,title: "Reunió equip divendres 19",grup:"COPI",dia:'19/05/2019',hora:'19:00'},
        {id:5,title: "Sopar divendres 19",grup:"COPI,COI,COA",dia:'19/05/2019',hora:'21:15'},
    ],
    events_previous:[
        {id:0,title: "Casal divendres 12",grup:"Grup Petits",dia:'12/05/2019',hora:'16:00'},
        {id:1,title: "Casal dijous 11",grup:"Grup Petits",dia:'11/05/2019',hora:'16:00'},
        {id:2,title: "Casal dimecres 10",grup:"Grup Petits",dia:'10/05/2019',hora:'16:00'},
        {id:3,title: "Casal dimarts 9",grup:"Grup Petits",dia:'09/05/2019',hora:'16:00'},
        {id:4,title: "Casal dilluns 8",grup:"COPI",dia:'08/05/2019',hora:'16:00'},
    ],
    iterator_next: 0,
    iterator_previous: 0
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return state;
        case 'CHANGE_ITERATOR_NEXT_PARAM':
            return { ...state, iterator_next: action.data.iterator};
        case 'CHANGE_ITERATOR_PREV_PARAM':
            return { ...state, iterator_previous: action.data.iterator}

        default: return state
    }
};

export {homeReducer}
