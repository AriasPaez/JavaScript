async function suma(valor1, valor2){
    return varlor1 + valor2;
}
async function calcular(){
    console.log( await new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
    }))    
}
// Await hace que la ejecucion del codigo espera a que una promesa sea resuelta
let promesa1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'I am an Promise!'))
promesa1.then(console.log)
calcular()

// Manejo de errores



