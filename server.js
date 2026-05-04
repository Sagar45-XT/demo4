import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
});

app.get("/home", async (req, res)=>{
    res.json({
        msg:"hey I'm root",
    });
});