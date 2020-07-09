const express = require('express');
const axios = require('axios').default;
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/press", async (request, response, next) => {
    try {
        const results = await axios.get("http://localhost:1337/articles");
        const articles = results.data;
        response.render("press", {articles});
        next();
    } catch (error) {
        throw error;
    }
})

app.listen(port, (error) => {
    if (error) {
        console.log("Cannot connect to the server");
    }
    console.log(`Server is listening on port: ${port}`);
})