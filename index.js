const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("server started");
})
app.get("/all", (req, res) => {
    res.send("all products routes");
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started successfully <---");
})