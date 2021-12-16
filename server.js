const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 7000; 


const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.18ukf.mongodb.net/TestDB?retryWrites=true&w=majority`;

//Middleware to parse the body of the request to JSON
app.use(express.json());
app.use(cors());


//Endpoints 

app.get("/", (req, res) => {
    res.json({
        "/users": "read and create new users", 
        "/users/:id": "read, update and delete an individual user",
    })
});

app.use("/users", usersRouter)

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



//Connect to MongoDB

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to MongoDB!")
    app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}`))
})
.catch((error) => {
    console.log(error);
});