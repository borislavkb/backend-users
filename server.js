const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const dotenv = require("dotenv");
let bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000; 


const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.18ukf.mongodb.net/TestDB?retryWrites=true&w=majority`;

//Middleware to parse the body of the request to JSON
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(usersRouter)

//Endpoints

app.get("/", (req, res) => {
    res.json({
        "/users": "read and create new users", 
        "/user/:id": "read, update and delete an individual user",
    })
});




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