// Import Express
const express = require('express');
const app = express();

app.use(express.static('../public')); 

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/api/content', (req, res) => {
    console.log("getting content!!");
})


app.get('/api/content', (req, res) => {
    res.send({})
})

app.delete("/api/delete/::id", (req, res) => {
    const id = +req.params.id;
    res.send({})
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

