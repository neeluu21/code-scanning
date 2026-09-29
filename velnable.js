const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/ping", (req, res) => {
    const host = req.query.host;

    // INTENTIONALLY VULNERABLE
    exec("ping -c 1 " + host, (error, stdout) => {
        if (error) {
            return res.status(500).send("Error");
        }

        res.send(stdout);
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
