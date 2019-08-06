const INITIAL_STATE ={
    theme: {id:0,
        title:'Comisió centre interés',
        creator:'Julia Soler',
        finished: false,
        data:'24/06/2019',
        description: 'En aquesta comisio pensem idees pel centre dinteres, realitzem tasques, etc. '
    },
    comments:[
        {id:0,author:'Elena',content:'Quines són les tasques que falta repertir?',created_date:'25/05/2019 17:55'},
        {id:1,author:'Julia',content:'Fer les cartes dels personatges del segon pis i del primer',created_date:'26/05/2019 15:55'},
        {id:2,author:'Elena',content:'Vale, genial!',created_date:'26/05/2019 19:05'},
    ]
}

const forumthemeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_THEME':
            return state;

        default: return state
    }
};

export {forumthemeReducer}
