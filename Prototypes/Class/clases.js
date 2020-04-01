class Persona{
    constructor(name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age
    }

    great(){
        console.log(`Hi, I'am ${this.name} ${this.lastName}!`)
    }
}
class Developer extends Persona{
    
    constructor(name, lastName, age){
        super(name, lastName, age)
    }
    great(fn){
        console.log(`Hi, I'am ${this.name} ${this.lastName} and I am a Developer!!`)
        if(fn){fn()}
    }
}

let cristian = new Persona('Cristian', 'Arias', 21)
cristian.great()
let devArias = new Developer('Cristian', 'Arias', 21)
devArias.great(() => console.log('I am Developer'))
