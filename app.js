require('dotenv').config()
const express = require('express');
const cors = require("cors")
const PORT = process.env.PORT || 8000
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
// const host = '0.0.0.0'
const db = mongoose.connection

mongoose.connect( process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
db.on("error", console.error.bind(console, "connection error: "));
db.once("open",  () => {
    console.log("Connected successfully");
});

const app = express()

app.use(cors());
app.use(express.json());

const userDataRout = require('./routes/userDataRout')
const error = require('./controller/error')
app.use(bodyParser.urlencoded({extended:"true"}))
app.use(userDataRout);
// app.use(error.error)
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
// app.use("/assets/images", express.static(path.join(__dirname, "assets/images")));




app.listen(PORT ,console.log(`runnig port is http://localhost:${PORT}`))