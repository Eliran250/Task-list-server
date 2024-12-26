const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const indexRoutes = require("./Routes/indexRoutes");


const app = express();
dotenv.config();

app.use(express.json());
app.use(indexRoutes); 



const URI = process.env.URI;


const connectDB = async () => {
    try 
    {
        await mongoose.connect(URI);
        console.log("You are connected to mongoDB");
    }
    catch (error)
    {
        console.log("You aren't connected to mongoDB" + error);
    }
}
connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Running on PORT:" + PORT);
})
