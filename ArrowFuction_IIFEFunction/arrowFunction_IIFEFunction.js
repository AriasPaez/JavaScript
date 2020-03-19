// La función IIFE es una función que se llama a si misma
// A continuacion, mediante una funcion flecha, definimos una funcion que recibe como parametro 'name_user', el cual 
// tiene por defecto el valor de 'Cristian' en dado caso que no se le mande valor alguno por parametro a esta funcion
// luego, toma un elemento div y modifica su contenido, y agrega dentro de este, el valor del parametro 'name_user'
// Esta funcion se llama a si misma colocandola entre parentesis, seguida de otros dos parentesis que la invocan
((name_user = 'Cristian') => {
    var iife_function = document.querySelector('#iife_function');
        
    iife_function.innerHTML = `<div class="alert alert-success my-5 mx-5" role="alert">
    ${name_user}
    </div>`;
})('Arias');

