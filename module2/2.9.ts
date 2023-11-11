{
// conditional type

type a1=null
type a2=number
type b1=undefined
type b2=string

type x1= a1 extends null ? true : false
type x2= a2 extends null ? true : false

type y1=a1 extends null ? true : b1 extends undefined? undefined: any
type y2=a2 extends null ? true : b2 extends undefined? undefined: any



type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

// car ase kina / bike ase kina / ship kina / tractor ase kina

// type CheckVehicle<T>= T  extends 'bike' | 'car' | 'ship' ? true : false;
type CheckVehicle<T>= T  extends keyof Sheikh ? true : false;
//  type hasBike= CheckVehicle<'bike '>
 type hasBike= CheckVehicle<'hh'>

}

// https://github.com/Apollo-Level2-Web-Dev/batch-2-be-a-typescript-technocrat/blob/main/module2/3.9.ts