//Explicación setTimeout
// Llama a resolve luego de 500 milisegundos. 
// El tercer argumento es lo que se le enviará a resolve
let promesa1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'I am First Promise!'))
let promesa2 = new Promise((resolve, reject) => setTimeout(resolve, 600, 'I am Second Promise!'))
let promesa3 = new Promise((resolve, reject) => reject(setTimeout(resolve, 600, 'I am Second Promise!')))
let saluda = () => console.log('Im going after First and Second Promise')


promesa1.then(function(){
    promesa2.then(function(){
        saluda();
    })
})

Promise.all([promesa1, promesa2, promesa3]).then(
    resultados => {
        console.log(resultados)
        saluda()
    }
).catch( () => {
    console.log('Something failed')
})