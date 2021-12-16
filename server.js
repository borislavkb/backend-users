const express = require('express');

const app = express();
const PORT = 7000; 

//Middleware to parse the body of the request to JSON
app.use(express.json());

//Endpoints 

app.get("/", (req, res) => {
    res.json({
        "/users": "read and create new users", 
        "/users/:id": "read, update and delete an individual user",
    })
});

//Initiate the server
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});