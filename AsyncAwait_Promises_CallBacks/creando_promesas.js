// const request = require('request')

function leer(url){
    return new Promise(function(resolve, reject){
        // Metodos asincronos
        request(url, function(err, response){
            if(err){
                reject(err);
            }
            else{
                resolve(response);
            }
        })
    })
}
leer('http://codigofacilito.com')
.then(function(response){
    console.log(response);
})
.catch(function(err){
    console.log(err);
})