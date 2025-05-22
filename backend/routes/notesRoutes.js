import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("you just fetched the notes.");
});

router.post("/", (req,res) => {
    res.status(201).json({message: "Note created successfully!"});
})

router.put("/:id"), (req,res) => {
    res.status(200).json({message: "Note updated successfully!"});
}

export default router;