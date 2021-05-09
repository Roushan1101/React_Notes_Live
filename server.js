const express=require("express");
const app=express();
cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://roshan-admin:roshan-admin@cluster0.dn6ff.mongodb.net/notesDB")


app.use("/",require("./routes/noteRoute"));

app.listen(3001, function(){
    console.log("Server is running on 3001");
});

