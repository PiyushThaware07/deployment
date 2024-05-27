const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./db/dbConnect");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        data: "server started successfully"
    });
})


const PropertyModel = require("./db/model/PropertyModel");
app.get("/all", async (req, res) => {
    const data = await PropertyModel.find();
    res.json({
        success: true,
        data: data
    });
})

app.post("/all",async (req,res)=>{
    const payload = req.body;
    const newRecord = await PropertyModel(payload);
    const savedRecord = await newRecord.save();
    res.json({
        success: true,
        data: savedRecord
    });
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started successfully <---");
})