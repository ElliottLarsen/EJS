const axios = require("axios");

async function makeRequest(url) {
    try {
        const response = await axios.get(url);
        console.log("Data: ", response.data);
    } catch (error) {
        console.log("ERROR!!!");
    }
}

makeRequest("https://dog-api.kinduff.com/api/facts?number=5");