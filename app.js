const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido público
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Miguel Jared',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Miguel Jared',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Miguel Jared',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.send('404 | Not Found')
});

app.listen(port, ()=> {
    console.log(`Corriendo en htpp://localhost:${port}`)
});
