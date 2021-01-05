const express = require('express');

const port = 3000;
const app = express();

app.listen(port, () => {
    console.info('Rodando na porta 3000')
})

app.get('/', (req,res) => {
    res.send('Coloquei pra funcionar.')
} )