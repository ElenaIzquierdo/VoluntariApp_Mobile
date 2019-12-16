export const fetchWeeksForQuarter = (quarter) => {
    return (dispatch) => {
        dispatch(requestWeeks());
        const baseUrl = 'http://165.22.76.147:8080/voluntariapp/week/quarter/'+quarter;
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
        }).then((resp) =>
            resp.json().then((body) =>
                dispatch(receiveWeeksForQuarter(body)))
            );
          
    }
}

const requestWeeks = () =>{
    return{
        type: 'REQUEST_WEEKS'
    }
}

const receiveWeeksForQuarter =(weeks)=>{
    console.log("Hola ", weeks)
    return {
        type: 'RECEIVE_WEEKS',
        data: weeks
    }
}
