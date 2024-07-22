const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 5555;

app.use(bodyParser.json());
app.use(express.static("Files"));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb+srv://nikhilsengar7012:87YArdgSbERrPNI7@money-tracker-app.lotvr3r.mongodb.net/Tracking-Money");
var db = mongoose.connection;

app.post("/List", (req, res) => {
    var category_select = req.body.category_select
    var amount_input = req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var Data = {
        "category": category_select,
        "Amount": amount_input,
        "Info": info,
        "Date": date_input,
    };
    db.collection("Transactions").insertOne(Data, (err, collection) => {
        if (err) {
            throw err;
        } else {
            console.log("Record inserted successfully");
        }
    })
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Files/index.html");
});

app.listen(port, () => {
    console.log(`Server is running at ${port} port.`);
});