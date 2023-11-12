{

    // abstraction  : 1. interface 2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting car engine`)
        }
        stopEngine(): void {
            console.log('i am stooping the car engine')
        }
        move(): void {
            console.log(` I am moving the car`)
        }
        test() {
            console.log('i am just testing');
        }
    }
    const toyotaCar = new Car1();
    // toyotaCar.startEngine();


    // abstract class

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log('i am just testing');
        }
    }
    class ToyotaCar extends Car2 {

        startEngine(): void {
            console.log('i am starting the car engine');
        }
        stopEngine(): void {
            console.log('i am stooping the car engine')
        }
        move(): void {
            console.log(` I am moving the car`)
        }

    }

const hondaCar= new ToyotaCar();
// hondaCar.test();


}