{

  //utility types
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
// pick
type nameAge=Pick<Person, 'name'|'age'>
// omit
type ContactInfo=Omit<Person, 'name'| 'age'>
// required
type PersonRequired=Required<Person>
// partial
type  PersonPartial=Partial<Person>
 // Readonly
 type PersonReadonly=Readonly<Person>

 const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
// person1.name='xxx'



//  Record
//   type MyObj = {
//     a: string;
//     b: string;
//   };
  type MyObj=Record<string,string>
//   type MyObj=Record<string,number> // 2 ta ak sathe dey na kanna kati kore

  const EmptyObj:Record<string,unknown>={}
const obj1:MyObj={
    a:'aa',
    b:'c',
    // c:12
}




}