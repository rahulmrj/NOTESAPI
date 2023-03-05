const express = require("express");
const app = express();
const notesRouter = require("./routes/notesRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is started at port "+ PORT);
    
    });
})
.catch((error)=>{
    console.log(error);
});




