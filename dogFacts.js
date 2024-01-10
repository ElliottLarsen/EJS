const axios = require("axios");

async function makeRequest(url) {
    try {
        const response = await axios.get(url);
        console.log("Data: ", response.data);
    } catch (error) {
        console.log("ERROR!!!");
    }
}

let result = await makeRequest("https://dog-api.kinduff.com/api/facts?number=5");

console.log(result);