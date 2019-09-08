export const changeDescriptionModified = () =>{
    return{
        type: 'CHANGE_DESCRIPTION_MOD',
    }
};

export const changeDescription = (descr) =>{
    console.log("HOLA",descr)
    return{
        type: 'CHANGE_DESCRIPTION¡',
        data: {
            descr:descr
        }
    }
};
