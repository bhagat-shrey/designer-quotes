const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
  {
    "id": 1,
    "quote": "Everything is designed. Few things are designed well.",
    "author": "Brian Reed"
  },
  {
    "id": 2,
    "quote": "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
    "author": "Paul Rand"
  },
  {
    "id": 3,
    "quote": "Design is not for philosophy, it's for life.",
    "author": "Issey Miyake"
  },
  {
    "id": 4,
    "quote": "Bad design is smoke, while good design is a mirror.",
    "author": "Juan-Carlos Fernandez"
  },
  {
    "id": 5,
    "quote": "Design creates culture. Culture shapes values. Values determine the future.",
    "author": "Robert L. Peters"
  },
  {
    "id": 6,
    "quote": "Thinking about design is hard, but not thinking about it can be disastrous.",
    "author": "Ralph Caplan"
  },
  {
    "id": 7,
    "quote": "Design is the intermediary between information and understanding.",
    "author": "Hans Hofmann"
  },
  {
    "id": 8,
    "quote": "Design is not just what it looks like and feels like. Design is how it works.",
    "author": "Steve Jobs"
  },
  {
    "id": 9,
    "quote": "The alternative to good design is bad design. There is no such thing as no design.",
    "author": "Adam Judge"
  },
  {
    "id": 10,
    "quote": "Color does not add a pleasant quality to design – it reinforces it.",
    "author": "Pierre Bonnard"
  },
  {
    "id": 11,
    "quote": "Good design is obvious. Great design is transparent.",
    "author": "Joe Sparano"
  },
  {
    "id": 12,
    "quote": "The dumbest mistake is viewing design as something you do at the end of the process to 'tidy up' the mess, as opposed to understanding it's a 'day one' issue and part of everything.",
    "author": "Tom Peterson"
  },
  {
    "id": 13,
    "quote": "Technology over technique produces emotionless design.",
    "author": "Daniel Mall"
  },
  {
    "id": 14,
    "quote": "Simplicity, carried to an extreme, becomes elegance.",
    "author": "John Franklin"
  },
  {
    "id": 15,
    "quote": "Design is intelligence made visible.",
    "author": "Alina Wheeler"
  },
  {
    "id": 16,
    "quote": "Creativity is to think more effectively.",
    "author": "Pierre Reverdy"
  },
  {
    "id": 17,
    "quote": "Nail the basics first, detail the details later.",
    "author": "Chris Anderson"
  },
  {
    "id": 18,
    "quote": "Art is solving problems that cannot be formulated before they have been solved. The shaping of the question is part of the answer.",
    "author": "Piet Hein"
  },
  {
    "id": 19,
    "quote": "The function of design is letting design function.",
    "author": "Micha Commeren"
  },
  {
    "id": 20,
    "quote": "A logo derives meaning from the quality of the thing it symbolizes, not the other way around.",
    "author": "Paul Rand"
  },
  {
    "id": 21,
    "quote": "Art is the only place you can do what you like. That's freedom.",
    "author": "Paula Rego"
  },
  {
    "id": 22,
    "quote": "Love blinds us. Don't love anything – an idea, a tool, a graphic, a technique, a technology, a client or a colleague – too much.",
    "author": "Adam Judge"
  },
  {
    "id": 23,
    "quote": "Creativity is inventing, experimenting, growing, taking risk, breaking rules, making mistakes and having fun.",
    "author": "Mary Lou Cook"
  },
  {
    "id": 24,
    "quote": "Everything is design. Everything!",
    "author": "Paul Rand"
  },
  {
    "id": 25,
    "quote": "When you are stuck, walk away from the computer and draw. It will teach you how to see.",
    "author": "Gerard Huerta"
  },
  {
    "id": 26,
    "quote": "You can't depend on your eyes when your imagination is out of focus.",
    "author": "Mark Twain"
  },
  {
    "id": 27,
    "quote": "Every great design begins with an even better story.",
    "author": "Lorinda Mamo"
  },
  {
    "id": 28,
    "quote": "The life of a designer is a life of fight: fight against the ugliness.",
    "author": "Massimo Vignelli"
  },
  {
    "id": 29,
    "quote": "Design is thinking made visual.",
    "author": "Saul Bass"
  },
  {
    "id": 30,
    "quote": "Accessible design is good design.",
    "author": "Steve Ballmer"
  },
  {
    "id": 31,
    "quote": "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    "author": "Antoine De Saint-Exupery"
  },
  {
    "id": 32,
    "quote": "The ultimate inspiration is the deadline.",
    "author": "Nolan Bushnell"
  },
  {
    "id": 33,
    "quote": "An essential aspect of creativity is not being afraid to fail.",
    "author": "Dr. Edwin Land"
  },
  {
    "id": 34,
    "quote": "Content precedes design. Design in the absence of content is not design, it's decoration.",
    "author": "Jeffrey Zeldman"
  },
  {
    "id": 35,
    "quote": "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.",
    "author": "Charles Eames"
  },
  {
    "id": 36,
    "quote": "Design is in everything we make, but it's also between those things. It's a mix of craft, science, storytelling, propaganda, and philosophy.",
    "author": "Erik Edigard"
  },
  {
    "id": 37,
    "quote": "Recognizing the need is the primary condition for design.",
    "author": "Charles Eames"
  },
  {
    "id": 38,
    "quote": "Graphic design will change the world right after rock and roll does.",
    "author": "David Carson"
  },
  {
    "id": 39,
    "quote": "I don't need an alarm clock. My ideas wake me.",
    "author": "Ray Bradbury"
  },
  {
    "id": 40,
    "quote": "Design is so simple. That's why it is so complicated.",
    "author": "Paul Rand"
  },
  {
    "id": 41,
    "quote": "There is only one type of designer – the type that cares about type.",
    "author": "Rohan Nanavati"
  },
  {
    "id": 42,
    "quote": "Typography needs to be audible. Typography needs to be felt. Typography needs to be experienced.",
    "author": "Helmut Schmid"
  },
  {
    "id": 43,
    "quote": "It is no secret that the real world in which the designer functions is not the world of art, but the world buying and selling.",
    "author": "Paul Rand"
  },
  {
    "id": 44,
    "quote": "When people say, 'I don't get art'...that means art is working.",
    "author": "John Maeda"
  },
  {
    "id": 45,
    "quote": "There are three responses to a piece of design – yes, no and WOW! Wow is the one to aim for.",
    "author": "Milton Glaser"
  },
  {
    "id": 46,
    "quote": "You can have an art experience in front of Rembrandt…or in front of a piece of graphic design.",
    "author": "Stefan Sagmeister"
  },
  {
    "id": 47,
    "quote": "It's through mistakes that you actually can grow. You have to get bad in order to get good.",
    "author": "Paula Scher"
  },
  {
    "id": 48,
    "quote": "Digital design is like painting, except the pain never dries.",
    "author": "Neville Brody"
  },
  {
    "id": 49,
    "quote": "Socrates said, \"Know thyself.\" I say, \"Know thy users.\" And guess what? They don't think like you do.",
    "author": "Joshua Brewer"
  },
  {
    "id": 50,
    "quote": "I want to make beautiful things, even if nobody cares, as opposed to ugly things. That's my intent.",
    "author": "Saul Bass"
  },
  {
    "id": 51,
    "quote": "I strive for two things in design: simplicity and clarity. Great design is born of those two things.",
    "author": "Lindon Leader"
  },
  {
    "id": 52,
    "quote": "It is far easier to build something new than to rework someone else's attempt.",
    "author": "Adam Judge"
  },
  {
    "id": 53,
    "quote": "Design is an opportunity to continue telling the story, not just to sum everything up.",
    "author": "Tate Linden"
  },
  {
    "id": 54,
    "quote": "Design cannot rescue failed content.",
    "author": "Edward R. Tufte"
  },
  {
    "id": 55,
    "quote": "Good design encourages a viewer to want to learn more.",
    "author": "Alexander Isley"
  },
  {
    "id": 56,
    "quote": "I've never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client.",
    "author": "Bob Gill"
  },
  {
    "id": 57,
    "quote": "The details are not the details. They make the design.",
    "author": "Charles Eames"
  },
  {
    "id": 58,
    "quote": "Good design is all about making other designers feel like idiots because that idea wasn't theirs.",
    "author": "Frank Chimero"
  },
  {
    "id": 59,
    "quote": "Graphic design is the paradise of individuality, eccentricity, heresy, abnormality, hobbies and humours.",
    "author": "George Santayana"
  },
  {
    "id": 60,
    "quote": "It's not about knowing all the gimmicks and photo tricks. If you haven't got the eye, no program will give it to you.",
    "author": "David Carson"
  },
  {
    "id": 61,
    "quote": "My argument is that all graphic designers hold high levels of responsibility in society. We take invisible ideas and make them tangible. That's our job.",
    "author": "Debbie Millman"
  },
  {
    "id": 62,
    "quote": "Design is as much an act of spacing as an act of marking.",
    "author": "Ellen Lupton"
  },
  {
    "id": 63,
    "quote": "Designers are meant to be loved, not to be understood.",
    "author": "Fabian Barral"
  },
  {
    "id": 64,
    "quote": "You can use an eraser on the drafting table or sledge hammer on the construction site.",
    "author": "Frank Lloyd Wright"
  },
  {
    "id": 65,
    "quote": "An image can only be one element in constructing a sequence of understanding.",
    "author": "Germano Facetti"
  },
  {
    "id": 66,
    "quote": "Design brings content into focus; design makes function visible.",
    "author": "Jennifer Morla"
  },
  {
    "id": 67,
    "quote": "Design adds value faster than it adds cost.",
    "author": "Joel Spolsky"
  },
  {
    "id": 68,
    "quote": "Marketing without design is lifeless, and design without marketing is mute.",
    "author": "Von Glitschka"
  },
  {
    "id": 69,
    "quote": "Don't design for everyone. It's impossible. All you end up doing is designing something that makes everyone unhappy.",
    "author": "Leisa Reichelt"
  },
  {
    "id": 70,
    "quote": "Design is easy. All you do is stare at the screen until drops of blood form on your forehead.",
    "author": "Marty Neumeier"
  },
  {
    "id": 71,
    "quote": "Good design goes to heaven; bad design goes everywhere.",
    "author": "Mieke Gerritzen"
  },
  {
    "id": 72,
    "quote": "To design is to communicate clearly by whatever means you can control or master.",
    "author": "Milton Glaser"
  },
  {
    "id": 73,
    "quote": "Design is more than just a few tricks to the eye. It's a few tricks to the brain.",
    "author": "Neville Brody"
  },
  {
    "id": 74,
    "quote": "Simplicity is not the goal. It is the by-product of a good idea and modest expectations.",
    "author": "Paul Rand"
  },
  {
    "id": 75,
    "quote": "The best way to accomplish serious design…is to be totally and completely unqualified for the job.",
    "author": "Paula Scher"
  },
  {
    "id": 76,
    "quote": "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.",
    "author": "Charles Eames"
  },
  {
    "id": 77,
    "quote": "Practice safe design: Use a concept.",
    "author": "Petrula Vontrikis"
  },
  {
    "id": 78,
    "quote": "Style is a way to say who you are without having to speak.",
    "author": "Rachel Zoe"
  },
  {
    "id": 79,
    "quote": "Good design keeps the user happy, the manufacturer in the black and the aesthete unoffended.",
    "author": "Raymond Loewy"
  },
  {
    "id": 80,
    "quote": "They enjoy giving form to ideas. If designers were made of ideas, they'd be their own clients.",
    "author": "Rudy Vanderlans"
  },
  {
    "id": 81,
    "quote": "You can't do better design with a computer, but you can speed up your work enormously.",
    "author": "Wim Crouwel"
  },
  {
    "id": 82,
    "quote": "Great things are not done by impulse, but a series of small things brought together.",
    "author": "Vincent"
  }
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

//const PORT = 3000;
//app.listen(PORT, () => {
  //  console.log(`API Server is running on http://localhost:${PORT}`);
//});
// Export the Express app
module.exports = app;
