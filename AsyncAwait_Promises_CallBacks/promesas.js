const rp = require('request-promise')

// ESTADOS DE UNA PROMESA
    // fullfiled: Se cumplió con éxito
    // rejected: No se cumplió con éxito
    // pending: La operación no ha terminado
    // setled: La promesa terminó, ya se con éxito o con error


rp('http://google.com')
.then(function(html){
    console.log('Terminé la petición de Google')
})
.catch(function(err){
    console.log(err)
})