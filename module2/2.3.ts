
{

// golobale generic type
type GenericArrayGo<T>=Array<T>

// generic type
type GenericArray= Array<number>
// const rollNumbers: number[]=[3,6,8]
// const rollNumbers: Array<number>=[3,6,8]
const rollNumbers: GenericArray=[3,6,8] 
const rollNumbers2: GenericArrayGo<number>=[3,6,8] 

type GenericArray1= Array<string>
// const mentors: string[]=['mr.x','y','z']
// const mentors: Array<string>=['mr.x','y','z']
const mentors: GenericArray1=['mr.x','y','z']
const mentors2: GenericArrayGo<string>=['mr.x','y','z']

type GenericArray2= Array<boolean>
// const boolArray: boolean[]=[true,false,true]
// const boolArray: Array<boolean>=[true,false,true]
const boolArray:GenericArray2 =[true,false,true]
const boolArray1:GenericArrayGo<boolean> =[true,false,true]


// function
const add=(x:number, y:number)=>x+y
add(30,20)

// object
type User={
    name:string;
    age:number;
}

// const user:GenericArrayGo<{name:string,age:number}>=[
const user:GenericArrayGo<User>=[
{
    name:'x',
    age:100,
},
{
    name:'y',
    age:110,
},

]

// generic tuple
type GenericTuple<x,y>=[x,y]
const manus: GenericTuple<string,string>=['x','y']

const UserWithId:GenericTuple<number,{name:string, email:string}>=[1234,{name:'x', email:'a@gmail.com'}]

}