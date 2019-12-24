const baseUrl = "http://165.22.76.147:8080/voluntariapp";
export const requestNoToken = async (path = "", method = "GET", body) => {
    return new Promise((res, rej) => {
        let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        };
        const finalPath = baseUrl + path;
        const bodyString = JSON.stringify(body);
        console.log(`Sending ${method} to ${finalPath} with ${bodyString}.`);
        fetch(finalPath, {
            method,
            headers,
            body: bodyString
        }).then(response => {
            console.log(response)
            if (response.ok) {
                console.log(response.ok)
                console.log(res(response))
                return res(response)
            } else {
                rej(new Error('Server responded with ' + response.code))
            }
        }).catch(err => {
            rej(err)
            console.log("Fetch error", err)
        })

    })

}