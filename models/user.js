import mongoose from "mongoose";

// Creating Schema for database
const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

// Creating model/collection
export const Users = mongoose.model('user',dbSchema);
