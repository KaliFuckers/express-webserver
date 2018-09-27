const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (texto) => {
    let palabra;
    let word = '';
    for(let i = 0; i <= texto.length; i++){
        if(texto[i] === ' '){
            palabra = texto.split(' ');
            palabra.map(element => {
                word += element[0].toUpperCase() + element.slice(1).toLowerCase() + ' ';
            });
            return word.slice(0, -1);
        }
        else{
            return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
        }
    }
});
