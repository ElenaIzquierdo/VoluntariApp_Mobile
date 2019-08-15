const INITIAL_STATE ={
    events:[
        {id:0,image:require('../images/casalfoto.jpg'),title: "Casal dilluns 15",grup:"Grup Petits",dia:'15/05/2019',hora:'16:00'},
        {id:1,image:require('../images/casalfoto.jpg'),title: "Casal dimarts 16",grup:"Grup Petits",dia:'16/05/2019',hora:'16:00'},
        {id:2,image:require('../images/casalfoto.jpg'),title: "Casal dimecres 17",grup:"Grup Petits",dia:'17/05/2019',hora:'16:00'},
        {id:3,image:require('../images/casalfoto.jpg'),title: "Casal dijous 18",grup:"Grup Petits",dia:'18/05/2019',hora:'16:00'},
        {id:4,image:require('../images/casalfoto.jpg'),title: "Reunió equip divendres 19",grup:"COPI",dia:'19/05/2019',hora:'19:00'},
        {id:5,image:require('../images/casalfoto.jpg'),title: "Sopar divendres 19",grup:"COPI,COI,COA",dia:'19/05/2019',hora:'21:15'},
    ],
    iterator: 0
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return state;
        case 'CHANGE_ITERATORPARAM':
            return { ...state, iterator: action.data.iterator};

        default: return state
    }
};

export {homeReducer}
