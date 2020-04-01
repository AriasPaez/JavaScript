
function create_person(nombre, apellido, edad) {
    return {
        name: nombre,
        last_name: apellido,
        age: edad
        }
}
let array_persons = [ create_person('Cristian', 'Arias', 21), create_person('Paula', 'Lopez', 22), create_person('Pablo', 'Perez', 23)
,create_person('Pedro', 'Sanchez', 21)
]
console.log(array_persons)
// USANDO MAP
let mapArrayChangeAgeToMonths = array_persons.map( ({age}) => age * 12)
console.log('Array: array_persons')
console.log(array_persons)
console.log('Array: mapArrayChangeAgeToMonths')
console.log(mapArrayChangeAgeToMonths)
console.log('Array: array_persons')
console.log(array_persons)

// USANDO FILTER
let newArrayPersonsFilterByAge = array_persons.filter( ({age}) => age > 21 ? age: false)
console.log(newArrayPersonsFilterByAge)
console.log('Array: array_persons')
console.log(array_persons)

// USANDO REDUCE
const reducer =  (acum, {age}) => acum +age
    // Iniciamos el contador en 0 y llamamos a reducer
var sumaEdades = array_persons.reduce(reducer, 0)
console.log(`Total suma edades: ${sumaEdades}`)