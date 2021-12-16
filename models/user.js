const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            vorname: String, 
            nachname: String
        },
        geschlecht: {
            man: String, 
            woman: String, 
            divers: String
        },
        titel: {
            Dr : String,
            Prof: String, 
            DrProf: String
        }
    },
        {
            timestamps: true,
            versionkey: false,
        }
    
);

const User = mongoose.model("User", userSchema);

module.exports = User;