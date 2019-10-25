const express = require('express');
const routes = require('./routes');
const connectDB = require('../config/db');


const app = express();

// Connect DataBase;
connectDB();

// set json format
app.use(express.json({ extended: false }));

app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running: http://localhost:${PORT}`);
});