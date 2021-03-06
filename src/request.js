import {AsyncStorage} from "react-native";
const baseUrl = "http://165.22.76.147:8080/voluntariapp";
export const request = async (path = "", method = "GET", body) => {
    return new Promise((res, rej) => {
        AsyncStorage.getItem('token').then((token) => {
          let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          };
          if(token != null) console.log("Bearer ", token)
          const finalPath = baseUrl + path;
          const bodyString = JSON.stringify(body);
          console.log(`Sending ${method} to ${finalPath} with ${bodyString}. Token present: ${token != null}`);
          fetch(finalPath, {
                method,
                headers,
                body: bodyString
            }).then(response => {
                if (response.ok) {
                    return res(response)
                } else {
                    rej(new Error('Server responded with ' + response.code))
                }
            }).catch(err => {
                rej(err)
                console.log("Fetch error", err)
            })
        });
    })

}
