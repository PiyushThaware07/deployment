const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Server Started Successfully"
    })
})
app.get("/all", (req, res) => {
    res.status(200).json({
        success: true,
        data: "all posts"
    })
})

const port = 3000;
app.listen(port, () => {
    console.log("Server started successfully <---");
})