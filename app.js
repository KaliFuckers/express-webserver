const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

//Paquete que nos permite usar el metodo render con hbs
app.set('view engine', 'hbs');
//Middleware para poner carpeta publica
app.use(express.static(__dirname + '/public'));

//Partiaces usado por ejemplo como templates
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000

app
    .get('/', (req, res) => {
        
        res.render('home', {
            nombre: 'shammael'
        });
    })
    .get('/about', (req, res) => {
        res.render('about')
    })
    .listen(port, () => console.log(`Servidor corriendo en localhost:${ port }`));