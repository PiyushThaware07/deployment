const mongoose = require("mongoose");
const dbURL = "mongodb+srv://personal2024projects:Z0R6CLfP6dEiExqH@cluster0.zccluyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURL);
const dbConnection = mongoose.connection;
console.log("Connecting to database...");
dbConnection.on("open", () => {
    console.log("Database connected successfully");
})
dbConnection.on("error", () => {
    console.log("Database connection failed !!!");
})