const { Pool } = require("pg");
const express = require("express");

const app = express();
const pool = new Pool({ user: "postgres", host: "localhost", database: "devlaunchpad", password: "password", port: 5432 });

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`PostgreSQL Time: ${result.rows[0].now}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
