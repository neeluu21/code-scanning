const express = require("express");
const { execFile } = require("child_process");

const app = express();

app.get("/ping", (req, res) => {
    const host = req.query.host;

    execFile("ping", ["-c", "1", host], (error, stdout) => {
        res.send(stdout);
    });
});

app.listen(8000);
