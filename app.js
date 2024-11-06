const express =require('express');
const port=4000;

const app=express();


// to accept JSON requests from the payload
app.use(express.json());
// to accept url-encoded requests from the payload
app.use(express.urlencoded({ extended: true }));


// app.get("/", (req, res) => {
//     let qry = req.query; // query string
//     res.send(`Query String data: ${qry.id}, ${qry.name}`);
// });

// app.post("/", (req, res) => {
//     let qry = req.body; // from url-encoded
//     res.send(`URL Encoded data: ${qry.name}, ${qry.id}`);
// });

// app.put("/", (req, res) => {
//     let qry = req.body; // Extract data from JSON body
//     res.send(`JSON data: ${qry.name}, ${qry.id}`);
// });
const BlogRoutes = require('./router/router');
const mongoose = require('mongoose');

// DB Connection
mongoose.connect("mongodb://localhost:27017/BlogManagement").then(() => { //database-name
    console.log("MongoDB Connected...");
});

// mongoose.connect("mongodb+srv://baskaranv1315:numlock15052005.@cluster0.ahq7w2f.mongodb.net/").then(()=>console.log("mongodb connected"));


app.use("/api/v1/blog/", BlogRoutes);

app.use("/*", (req, res) => {
    res.send("No Routes found!");
});

app.listen(port,()=>
{
    console.log(`Server is listening on port : ${port}`);
})