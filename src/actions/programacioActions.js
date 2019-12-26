import {AsyncStorage} from "react-native";
export const fetchWeeksForQuarter = (quarter) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            dispatch(requestWeeks());
            const baseUrl = 'http://165.22.76.147:8080/voluntariapp/week/quarter-no-pagination/'+quarter;
            fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveWeeksForQuarter(body)))
                );
        })    
    }
}

const requestWeeks = () =>{
    return{
        type: 'REQUEST_WEEKS'
    }
}

const receiveWeeksForQuarter =(weeks)=>{
    return {
        type: 'RECEIVE_WEEKS',
        data: weeks
    }
}
