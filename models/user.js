const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: String, 
        secondName: String,
        gender: String,
        titel: String,
        birthDate: String,
    },
        {
            timestamps: true,
            versionkey: false,
        }
    
);

const User = mongoose.model("User", userSchema);

module.exports = User;