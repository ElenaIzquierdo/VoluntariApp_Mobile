const INITIAL_STATE ={
    message:'Hola ekip! Aquesta setmana ens centrarem amb activitats de genere i ' +
        'avançar en el centre dinteres! Que vagi super be!!!',
    setmana: [
        {id:0, name: 'Dilluns',date: '19/09/2019', hora: '16:00', attendee: true, finished: true},
        {id:1, name: 'Dimarts', date: '17/09/2019', attendee: false, finished: true},
        {id:2, name: 'Dimecres', date: '18/09/2019', attendee: true, finished: true},
        {id:3, name: 'Dijous', date: '19/09/2019', attendee: false, finished: true},
        {id:4, name: 'Divendres', date: '20/09/2019', attendee: false, finished: false}
    ],
    week: {
        "id": 1,
        "name": "Setmana 16/09-20/09",
        "start_date": "2019-09-16T16:00:01.846839Z",
        "end_date": "2019-09-20T16:00:01.846839Z",
        "rate_avg": null,
        "attendance_avg": null,
        "quarter": 1
        },
    days: [],
    isFetching: false
        
}

const weekReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_WEEK':
            return state;

        case 'CHANGE_SWITCH_WEEK':
            const new_days = [...state.days];
            var i;
            for (i = 0; i < new_days.length; i++) {
                if(new_days[i].id === action.data.id){
                    new_days[i].attending = action.data.value
                }
            }
            return {...state, days: new_days};
        case 'REQUEST_WEEK':
            return {...state, isFetching: true}
        case 'RECEIVE_WEEK':
            return {...state, week:action.data, isFetching: false}
        case 'REQUEST_ACTIVITIES_FROM_WEEK':
            return {...state, isFetching: true}
        case 'RECEIVE_ACTIVITIES_FROM_WEEK':
            return {...state, days:action.data, isFetching: false}

        default: return state
    }
};

export {weekReducer}
