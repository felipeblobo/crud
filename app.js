const express = require('express');

const port = 3000;
const app = express();

app.use(express.json());

const geeks = [];

app.get('/colegas', (req,res) => {
    return res.json(geeks);
});

app.get('/colegas/:index', (req,res) => {
    return res.json(req.user);
})

app.post('/colegas', (req,res) => {
    const { name } = req.body;
    geeks.push(name);
    return res.json(geeks);
});

app.listen(port, () => {
    console.info('Rodando na porta 3000')
});
