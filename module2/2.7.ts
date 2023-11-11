{

// generic constraint with key of operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
type Owner="bike" | "car"  | "ship";
const person1:Owner='car'


type Owner2= keyof Vehicle
const person2:Owner2="ship"
  


const user={
  name:'mr x',
  age:26,
  address:'ctg'
}
user['name'] // third breaket  vitor je ta rakhbo oita kintu dekhabe mane oitar value kintu dekhabe



// const getPropertyValue=(obj:object, key:string)=>{
const getPropertyValue=<X, Y extends keyof X>(obj:X, key: Y)=>{
  return obj[key]
}
const user2={
  name:'mr x',
  age:26,
  address:'ctg'
}
const result=getPropertyValue(user2,'name')

}