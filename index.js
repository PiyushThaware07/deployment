const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./db/dbConnect");
const bodyParser = require('body-parser');


// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

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

app.post("/all", async (req, res) => {
    try {
        const payload = req.body;
        const newRecord = await PropertyModel(payload);
        const savedRecord = await newRecord.save();
        res.json({
            success: true,
            data: savedRecord
        });
    }
    catch (error) {
        res.json({
            success: false,
            data: error.message
        });
    }
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started successfully <---");
})