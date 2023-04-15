import mongoose from "mongoose";

// Creating Schema for database
const dbSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

// Creating model/collection
export const Task = mongoose.model('task',dbSchema);
