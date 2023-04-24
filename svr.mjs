import express from 'express';

const app = express();
app.use(express.static('client', { extensions: ['html'] }));

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
