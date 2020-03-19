function get_information(){
    var content_information =document.querySelector('#content_to_get');
        fetch('file_consumer_services.txt')
        .then( data => data.text())
        .then( data =>{
            console.log(data)
            content_information.innerHTML = `${data}`;
        })
}
// NOT AVAILABLE, YET
function consume_api_mi_indicador(){
    var content_information = document.querySelector('#content_api_miindicador');
    fetch('https://mindicador.cl/api/dolar')
    .then( result_api => result_api.json())
    .then( result_api =>{
        content_information.innerHTML= draw_table(result_api);       

    })

}
function draw_table(result_api){
    let table = `<table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>`;
    // let table_dolar = document.createElement("table");
        // let tbl_body = document.createElement("tbody");
        let n = 0;
        for(let i of result_api.serie){
            n++;
            console.log(i.fecha +'  -   '+ i.valor);
            table += `<tr>
                    <th scope="row">${n}</th>
                    <td>${i.fecha}</td>
                    <td>${i.valor}</td>            
                    </tr>`;
            // var tr_table = document.createElement("tr");

            // let td_table = document.createElement("th");
            // td_table.appendChild(document.createTextNode(i.fecha));

            // let td2_table = document.createElement("th");
            // td2_table.appendChild(document.createTextNode(i.valor));

            // tr_table.appendChild(td_table);
            // tr_table.appendChild(td2_table);
                       
        }
        // tbl_body.appendChild(tr_table);
        // table_dolar.appendChild(tbl_body);
        table += `</tbody>
                    </table>`;
        return table;

}
// Funtion to consume API service from https://randomuser.me/api/
function consume_api_random_user(){
    // Get id of element div on the index.html
    var content_information = document.querySelector('#content_api_random_user');
    // Get data from link
    fetch('https://randomuser.me/api/')
    // Promise: get a data an take this how json
    .then( result_api => result_api.json())
    // Promise: Take a data an get information from this
    .then( result_api =>{
        // Show data in console of navigator
        console.log(result_api.results[0]);      
        // Show information on index.html
        content_information.innerHTML = `<img src="${result_api.results[0].picture.large}" width="100px" class="img-fluid rounded-circle" alt="User Photo">
                                        
                                         <p> <strong> Name: </strong> ${result_api.results[0].name.title + '. ' + result_api.results[0].name.first + ' ' + result_api.results[0].name.last}</p>
                                         <p> <strong> Gender: </strong> ${result_api.results[0].gender}</p>
                                         <p> <strong> Email: </strong> ${result_api.results[0].email}</p>
                                         <p> <strong> Phone: </strong> ${result_api.results[0].phone}</p>
                                         <p> <strong> Date: </strong> ${result_api.results[0].dob.date}</p>
                                         <p> <strong> Age: </strong> ${result_api.results[0].dob.age}</p>
                                         <p> <strong> Country: </strong> ${result_api.results[0].location.country}</p>
                                         
                                         `;

    })



}