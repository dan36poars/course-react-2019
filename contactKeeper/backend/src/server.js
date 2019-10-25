const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running: http://localhost:${PORT}`);
});