const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Update this route to use your file name
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'designer-quotes-api.html'));
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
});