import express from 'express';

const app = express();
app.use(express.static('client'));

// function getStats(req, res) {
//   res.json(petStats);
// app.get('/stats', getStats);

app.listen(8080);
