// For Of
let arreglo = [2, 3, 4]
for(numero of arreglo){
    console.log(numero)
}


function saludarATodos(){
    for(nombre of arguments){
        console.log('Hi, '+nombre)
    }
}
saludarATodos('Cristian', 'Paula', 'Milena')

// For In
// Itera sobre las propiedas y no sobre los valores
// Itera las propiedades de cualquier tipo de objeto

let myUser = {
    name: 'Cristian',
    last_name: 'Arias',
    age: 21
}
for (atributes in myUser){
    console.log(atributes)
}