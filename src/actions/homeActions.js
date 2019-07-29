export const changeIteratorParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATORPARAM',
        data: {
            iterator:iterator
        }
    }
}
