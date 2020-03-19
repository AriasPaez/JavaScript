var my_clock = setInterval( function(){
    let seconds = new Date;
    var div_clock = document.querySelector("#div_clock");
    div_clock.innerHTML = `
    
    <h2>Son las  ${seconds.getHours() > 0 && seconds.getHours() < 13 ? 
        seconds.getHours() + " : "+ seconds.getMinutes() + " : "+ seconds.getSeconds() + " AM": 
        seconds.getHours()-12 +" : "+ seconds.getMinutes() + " : "+ seconds.getSeconds() + " PM"} </h2>`;
}, 1000);

var time_to_christmas_2019 = setInterval( function(){
    let today = new Date;
    var div_christmas = document.querySelector("#div_christmas");
    div_christmas.innerHTML = `<h2> Faltan ${
        (((24-today.getDate())*24)+(23-today.getHours())) + ": " + 
        (60-today.getMinutes()) +": "+ 
        (60-today.getSeconds())} para Navidad</h2>`;
    
}, 1000);

var time_to_2020 = setInterval( function(){
    let today = new Date;
    var div_time_to_2020 = document.querySelector("#div_time_to_2020");
    div_time_to_2020.innerHTML = `<h2> Faltan ${
        (((31-today.getDate())*24)+(23-today.getHours())) + ": " + 
        (60-today.getMinutes()) +": "+ 
        (60-today.getSeconds())} para el 2020</h2>`;
    
}, 1000);