import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes)

// app.get("/api/try", (req,res)=>{
//     res.send("You just built your first haha API");
// });

app.listen(5001, () => {
    console.log("Server is running on port: 5001");
});