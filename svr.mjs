import express from 'express';

const app = express();
app.use(express.static('client', { extensions: ['html'] }));

async function getStats(req, res) {
    const stats = 1
    if (stats === 1) {
        res.json('hello!');
    } else {
        res.status(404).send('No match for that');
      }
};


function showApp(req, res){
    res.sendFile('\game.html', { root: '\client' })
}

function showMenu(req, res){
    res.sendFile('\index.html', { root: '\client' })
}

app.get('/pet', showApp);
app.get('/', showMenu)
app.get('/stats', getStats);

app.listen(8080);
