const express = require("express");
const app = express();

app.get("/api", (req, res) => res.json({ message: "API from Node.js!" }));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
