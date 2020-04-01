const getById = document.getElementById('Title');
const getByClass = document.getElementsByClassName('class-h3');
const getByLabel = document.getElementsByTagName('li');

const queryById = document.querySelector('#Title');
const queryByClass = document.querySelector('.class-h3');
const queryByLabel = document.querySelector('li');

const queryByIdAll = document.querySelectorAll('#Title');
const queryByClassAll = document.querySelectorAll('.class-h3');
const queryByLabelAll = document.querySelectorAll('li');

// Obtiene todos los li impares
const queryByLabelAllOdd = document.querySelectorAll('li:nth-child(odd)');

//OBTENIENDO LOS HIJOS
const getOl = document.querySelector('ol')
console.log(getOl.childElementCount)
console.log(getOl.children)

console.log(getOl.firstElementChild)
console.log(getOl.lastElementChild)  
// OBTENIENDO PADRES
const getLi_2 = document.querySelector('.li2')
console.log(getLi_2.parentElement)
// OBTENIENDO EL SIGUIENTE HERMANO
console.log(getLi_2.nextElementSibling)
// OBTENIENDO EL SIGUIENTE HERMANO
console.log(getLi_2.previousElementSibling)

// NODOS
console.log(getLi_2.childNodes)

