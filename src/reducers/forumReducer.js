const INITIAL_STATE ={
    themes_open:[
        {id:0,title:'Comisió centre interés', creator:'Julia Soler', finished: false, data:'24/06/2019'},
        {id:1,title:'Idees reunió equip', creator:'Victor Gasol', finished: false, data:'10/05/2019'},
        {id:2,title:'Idees cançons', creator:'Laura Gonzalez', finished: false, data:'04/04/2019'},
    ],
    themes_close:[
        {id:3,title:'Activitat dilluns 22-Sherlock', creator:'Laura Gonzalez', finished: true, data:'18/03/2019'},
        {id:4,title:'Activitat dilluns 22-Sherlock', creator:'Laura Gonzalez', finished: true, data:'18/03/2019'},
        {id:5,title:'Activitat dilluns 22-Sherlock', creator:'Laura Gonzalez', finished: true, data:'18/03/2019'},
        {id:6,title:'Activitat dilluns 22-Sherlock', creator:'Laura Gonzalez', finished: true, data:'18/03/2019'},
    ],
    isOpen: false
};

const forumReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_THEMES':
            return state;
        case 'CLOSE_MODAL':
            return {...state, isOpen: !state.isOpen};

        default: return state
    }
};

export {forumReducer}
