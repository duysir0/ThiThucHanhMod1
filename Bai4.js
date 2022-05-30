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

let Animal1 = new Animal(`Elephant`,45.6)
let Animal2 = new Animal(`Tiger`,40.6)
Animal2.setName(`Mouse`)
Animal1.toString()
Animal2.toString()
console.log(Animal1.toString())
console.log(Animal2.toString())