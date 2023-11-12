{

    // oop - class

    class Animal {
        name: string;
        species: string;
        sound: string;
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }

    }

    const dog = new Animal('german ali', 'dog', 'ghew');
    // dog.name
    // dog.makeSound()
    const cat = new Animal('brazil ali', 'cat', 'meaw');
    // cat.makeSound()





    // upor oita k short cut vabe ai vabe likha jay
 
    class Animal2 {
       constructor(public name: string,public species: string, public sound: string) 
        {}
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }

}

const dog2 = new Animal('german ali', 'dog', 'ghew');
// dog.name
// dog.makeSound()
const cat2 = new Animal('brazil ali', 'cat', 'meaw');
cat.makeSound()




}