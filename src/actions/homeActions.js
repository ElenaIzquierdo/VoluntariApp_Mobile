export const changeIteratorNextParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATOR_NEXT_PARAM',
        data: {
            iterator:iterator
        }
    }
}

export const changeIteratorPreviousParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATOR_PREV_PARAM',
        data: {
            iterator:iterator
        }
    }
}

export const changeSwitch = (value) =>{
    return{
        type: 'CHANGE_SWITCH',
        data: {
            valueSwitch: value
        }
    }
}
