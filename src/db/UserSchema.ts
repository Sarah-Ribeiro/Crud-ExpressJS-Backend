import mongoose from "mongoose";
import { Schema } from "mongoose";

var UserSchema = new Schema({

    Name: {
        type: String, 
        required: true
    },
    Email: {
        type: String, 
        required: true
    },
    Age: {
        type: Number, 
        required: true
    },
});

const User = mongoose.model('User', UserSchema);

export default User