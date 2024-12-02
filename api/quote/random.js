// api/quote/random.js
const quotes = [
    { id: 1, quote: "Design is intelligence made visible.", author: "Alina Wheeler" },
    { id: 2, quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
    { id: 3, quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" }
];

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    if (req.method === 'GET') {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        res.status(200).json(quotes[randomIndex]);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}