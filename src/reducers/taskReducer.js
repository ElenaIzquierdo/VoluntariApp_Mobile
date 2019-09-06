const INITIAL_STATE ={
    task: {id:0, title: 'Fer carta 1',
        assignees: [{id:0,name:'Elena Izquierdo'},
            {id:1,name:'Laura Gonzalez'}],
        finished: false,
        description: 'Aquesta tasca es molt guai'},
    descriptionModified: false,
    descriptionValue: 'Aquesta tasca es molt guai'
};

const taskReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case 'FETCH_TASK':
            return state;
        case 'CHANGE_DESCRIPTION_MOD':
            return {...state, descriptionModified: !state.descriptionModified};
        case 'CHANGE_DESCRIPTION':
            return {...state, descriptionValue: action.data.descr};

        default: return state
    }
};

export {taskReducer}
