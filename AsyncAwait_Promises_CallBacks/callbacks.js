// Es una funcion que se pasa como 
// argumento a una operacion asincrona

// usa la libreria <request>
const request = require('request')

request('http://google.com', function(){
    console.log('Terminé la petición de Google')
})
