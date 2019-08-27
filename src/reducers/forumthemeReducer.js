const INITIAL_STATE ={
    theme: {id:0,
        title:'Comisió centre interés',
        creator:'Julia Soler',
        finished: false,
        data:'24/06/2019',
        description: 'En aquesta comisio pensem idees pel centre dinteres, realitzem tasques, etc. ',
        group: 'COPI'
    },
    comments:[
        {id:0,author:'Elena Izquierdo',content:'Quines són les tasques que falta repartir?',
            created_date:'25/05/2019 17:55', image:require('../images/user1.jpg')},
        {id:1,author:'Julia Soler',content:'Fer les cartes dels personatges del segon pis i del primer',
            created_date:'26/05/2019 15:55', image:null},
        {id:2,author:'Elena Izquierdo',content:'Vale, genial!',
            created_date:'26/05/2019 19:05', image:require('../images/user1.jpg')},
        {id:3,author:'Laura Gonzalez',content:'I jo, que he de fer?',
            created_date:'27/05/2019 16:05', image:require('../images/user3.jpg')},
        {id:4,author:'Julia Soler',content:'Mira les tasques plis',
            created_date:'27/05/2019 18:15', image:require('../images/user2.jpeg')},

    ],
    participants:[
        {id:0, name: 'Elena Izquierdo', image:require('../images/user1.jpg')},
        {id:1, name: 'Julia Soler', image:require('../images/user2.jpeg')},
        {id:2, name: 'Laura Gonzalez', image:require('../images/user3.jpg')},
    ],
    tasks:[
        {id:0, title: 'Fer carta 1', assignees: ['Elena Izquierdo','Laura Gonzalez'], finished: false},
        {id:1, title: 'Crear personatge 1', assignees: ['Aida Gonzalez'], finished: true},
        {id:2, title: 'Crear personatge 2', assignees: ['Julia Soler'], finished: true},
        {id:3, title: 'Fer carta 2', assignees: ['Victor Gasol'], finished: true},
        {id:4, title: 'Preparar mural', assignees: ['Ema Formage'], finished: true}
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
