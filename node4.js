

const axios = require('axios');


const apiURL = "https://jsonplaceholder.typicode.com/posts";


async function testAPI() {
    try {
        
        const getResponse = await axios.get(apiURL);
        const firstPost = getResponse.data[0];
        console.log("Title of the first post:", firstPost.title);

        
        const newPost = {
            title: "Automated Test Post",
            body: "Testing API endpoints via Node.js script.",
            userId: 123
        };

        const postResponse = await axios.post(apiURL, newPost);
        console.log("Response from POST request:", postResponse.data);

    } catch (error) {
       
        console.error("An error occurred:", error.message);
    }
}


testAPI();
