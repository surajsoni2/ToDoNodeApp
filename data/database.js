import mongoose from "mongoose";

// Connecting Database and creating DB 
export const dbConnect = ()=> {
    mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName: "TodoProject"
}).then(console.log('DB Connected'))
    .catch((e)=>console.log(e));
}
