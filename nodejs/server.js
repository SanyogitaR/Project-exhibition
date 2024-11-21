const express = require('express'); // Import Express
const app = express();
const bodyParser = require('body-parser'); // For handling request bodies

app.use(bodyParser.json()); // Parse incoming JSON requests

const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});