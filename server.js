const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let lastCommand = 'Ningún comando';

app.get('/api/control', (req, res) => {
    res.json(lastCommand);
});

app.post('/api/control', (req, res) => {
    lastCommand = req.body.command || 'Ningún comando';
    res.json({ message: 'Comando recibido' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
