const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
    { id: 1, quote: "Design is intelligence made visible.", author: "Alina Wheeler" },
    { id: 2, quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
    { id: 3, quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
    { id: 4, quote: "Everything is designed. Few things are designed well", author: "Brian Reed" }
    { id: 5, quote: "Design can be art. Design can be aesthetics. Design is so simple, that’s why it is so complicated.", author: "Paul Rand"}
    { id: 6, quote: "Design is intelligence made visible.", author: "Alina Wheeler" },
    { id: 7, quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
    { id: 8, quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
    { id: 9, quote: "Everything is designed. Few things are designed well", author: "Brian Reed" }
    { id: 10, quote: "Design can be art. Design can be aesthetics. Design is so simple, that’s why it is so complicated.", author: "Paul Rand"}
];

// Fixed random quote endpoint
app.get('/api/quote/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// Get all quotes
app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

// Get quote by ID
app.get('/api/quotes/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === quoteId);
    
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({ 
            message: `Quote with id ${quoteId} not found`,
            availableIds: quotes.map(q => q.id)
        });
    }
});

//const PORT = 3000;
//app.listen(PORT, () => {
  //  console.log(`API Server is running on http://localhost:${PORT}`);
//});
// Export the Express app
module.exports = app;