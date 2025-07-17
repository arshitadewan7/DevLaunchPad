const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/devlaunchpad", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => res.send("MongoDB CRUD Starter 🚀"));
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
