function Person(name, last_name, age){
    this.name = name
    this.last_name = last_name
    this.age = age
}

Person.prototype.great = function() {
    
    console.log(`Hi, I'm ${this.name} ${this.last_name}!`)
}
let cristian = new Person('Cristian', 'Arias', 21) 
cristian.great()