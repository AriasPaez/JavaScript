var my_form = document.getElementById('id_form_login');
var request_form = document.getElementById('request_form');
// Detectamos el evento submit del formulario
my_form.addEventListener('submit', function(e){
    // Desactiva la opcion por defecto del navegador, la cual muestra
    // la informacion del formulario que se procesa, en el navegador
    e.preventDefault();
    
    // Obtenemos nuestro formulario agregandolo a un nuevo formulario
    var my_data_form = new FormData(my_form);
    // Obtenemos datos especificos de nuestro formulario
    
                // FETCH
        fetch('my_post.php',{
            method: 'POST',
            body: my_data_form
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let request_form = document.getElementById('request_form');
            request_form.innerHTML = `<div class="alert alert-success" role="alert">
            ${data}
        </div>`;
        })
    

})