let numeros = [2, 6, 10]
function sumar(n1, n2, n3){
    return n1 + n2 + n3;
}

let forma1 = sumar.apply(this, numeros);
console.log(forma1)
// Usando el operador de propagacion. Es decir, los <...>; este convierte el arreglo de : <[1,2,3,]> a <2,3,4>
let forma2 = sumar(...numeros);
console.log(forma2)


// Combinar arreglos
let arreglo_2 = ['Achu', 'Salud!']
console.log([...numeros, ...arreglo_2])

// Combinar Objetos
let objeto1 = {
    nombre: 'Cristian'
}
let objeto2 = {
    apellido: 'Arias'
}
console.log(objeto1)
console.log(objeto2)

let ojetoCombinado = {
    ...objeto1,
    ...objeto2
}
console.log(ojetoCombinado)