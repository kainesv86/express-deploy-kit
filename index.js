const express = require("express");
const app = express();

app.use(express.static(process.cwd() + "/public"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log(`Listening on port ${port}`);
});

app.get("/*", (req, res) => {
        res.sendFile(process.cwd() + "/public/index.html");
});
