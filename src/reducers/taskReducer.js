const INITIAL_STATE ={
    task: {id:0, title: 'Fer carta 1',
        assignees: [{id:0,name:'Elena Izquierdo'},
            {id:1,name:'Laura Gonzalez'}],
        finished: false,
        description: 'Aquesta tasca es molt guai'},
    descriptionModified: false
};

const taskReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_TASK':
            return state;

        default: return state
    }
};

export {taskReducer}
