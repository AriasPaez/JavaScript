class  Person{
    constructor(name = 'Anonimo', last_name = 'Anonimo', age){
        this.name = name
        this.last_name = last_name
        this.age = age
    }
    great() {
        console.log( `Hello, My name is ${this.name} ${this.last_name} and I'm ${this.age} years old!`)
    }
    isAdult(){
        console.log(this.age >= 18 ? `Soy Mayor de Edad`:`Soy menor de edad`)
    }

}
class Developer extends Person{
    constructor(name = 'Anonimo', last_name = 'Anonimo', age){  
        super(name, last_name, age)
    }
    great(){
        console.log( `Hello, My name is ${this.name} ${this.last_name} and I'm developer`)
    }
}

// Person.prototype.great = function() { 
//     debugger
//     console.log( `Hello, My name is ${this.name} ${this.last_name} and I'm ${this.age} years old!`)
// }
// Person.prototype.isAdult = function(){
//     debugger
//     return this.age >= 18 ? `Soy Mayor de Edad`:`Soy menor de edad`
// }



