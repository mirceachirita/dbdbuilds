require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;
dbConnection.on("error", (error) => { console.error(error); });
dbConnection.once("open", () => { console.log("Connected to database"); });

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Server started");
});

const perksTestRoute = require('./routes/perksTest');
const charsTestRoute = require('./routes/charsTest');

app.use('/perksTest', perksTestRoute);
app.use('/charsTest', charsTestRoute);

// app.get('/', async (req, res) => {
//     try {
//         const perks = await fetch("https://dbd-api.herokuapp.com/perks");
//         return res.status(200).json(perks);
//     } catch (error) {
//         return res.status(500).json({ 'error': `Error: ${error}`});
//     }
// });