import express from "express";

const app = express();

app.get("/api/try", (req,res)=>{
    res.send("You just built your first haha API");
});

app.listen(5001, () => {
    console.log("Server is running on port: 5001");
});