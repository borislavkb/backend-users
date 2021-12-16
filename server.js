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


app.get("/users"), (req, res ) => {
    console.log("Generates users");
}

app.post("/users", (req, res) => {
    console.log("Inserting new user")
});


app.get("/users/:id", (req, res) => {
    console.log("Calls a specific user")
});

app.patch("/users/:id", (req,res) => {
    console.log("Updates a specific user")
});

app.delete("/users/:id", (req, res) => {
    console.log("Deletes a user");
})



//Initiate the server
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});