class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(value){
        this.name = value
    }
    setWeight(value) {
        this.weight = value;
    }
    getName(){
        return this.name;
    }
    getweight() {
        return this.weight;
    }
    toString(){
        return`Đây là con: ${this.name} có cân nặng là: ${this.weight}`
    }
}

let objAnimal1 = new Animal(`Elephant`,45.6)
let objAnimal2 = new Animal(`Tiger`,40.6)
objAnimal2.setName(`Mouse`)
objAnimal1.toString()
objAnimal2.toString()
console.log(objAnimal1.toString())
console.log(objAnimal2.toString())