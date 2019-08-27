const INITIAL_STATE ={
    objectius: [
        {id:0, description: 'Estimular la imaginació i la creativitat dels infants'},
        {id:1, description: 'Potenciar les vivencies comunes del grup'},
        {id:2, description: 'Crear un mon imaginatiu'},
        {id:3, description: 'Motivar els infants a participar en les diverses activitats'},
        {id:4, description: 'Gaudir de lacompanyament de personatges màgics en un entorn diferent'},
        {id:5, description: 'Fomentar la cooperació entre els membres dels grups'}
    ],
    explicacio: [
        {id: 0, title: 'Dia 15', description: 'Trobem un pendrive lligat a una pedra, quan acabem de dinar reproduim el video' +
                'que hi ha dins. El video es la cientiica que en sexplica la historia de la maquina del temps que va construir' +
                'i que una persona prehistòrica es va colar a la maquina i ha viatjat fins lactualitat. Ens demana' +
                'ajuda per tornar-la a la seva època.', finished: true},
        {id: 1, title: 'Dia 16', description: 'Arrel de lactivitat daquest dia, ens comuniquem amb la persona prehistorica i li' +
                'expliquem on es la maquina del temps i que ha de tornar a la seva època.', finished: true},
        {id: 2, title: 'Dia 18', description: 'Petits rep una carta de la cientifica on explica que ha tonrat el personatge prehistoric' +
                'pero que ha espatllat tota la maquina i ara ella sha quedat atrapada en el temps! Ens demana' +
                'que lajudem a reconstruir la maquina.', finished: true},
        {id: 3, title: 'Dia 19', description: 'Trobem les peces per arreglar la maquina', finished: false},
        {id: 4, title: 'Dia 20', description: 'Arreglem la màquina i la cientifica arriba a lactualitat per donar-nos les gràcies i ' +
                'marxar a casa seva.', finished: false},

    ]
}

const centreinteresReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
            return state;

        default: return state
    }
};

export {centreinteresReducer}
