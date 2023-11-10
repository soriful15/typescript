{
// Type Alias

type Student={
    name:string;
    age:number;
    gender:string;
    contactNo?:string;
    address:string;
}



// const student1:{
//     name:string;
//     age:number;
//     gender:string;
//     contactNo:string;
//     address:string;
// }={
//     name:'soriful',
//     age:26,
//     gender:'Male',
//     contactNo:'01627405404',
//     address:'jatrabari'
// }

const student1:Student={
    name:'soriful',
    age:26,
    gender:'Male',
    contactNo:'01627405404',
    address:'jatrabari'
}

// const student2:{
//     name:string;
//     age:number;
//     gender:string;
//     address:string;
// }={
//     name:'shuvo',
//     age:27,
//     gender:'Male',
//     address:'shoniakhra'
// }

const student2:Student={
    name:'shuvo',
    age:27,
    gender:'Male',
    address:'shoniakhra'
}



type UserName= string
const Name: UserName='soriful'

type IsAdmin= boolean
const isAdmin: IsAdmin=true

type AddNumber=(num1:number, num2:number)=>number

const array: AddNumber=(num1,num2)=>num1+num2

type AddNumber2=(num1:number, num2:number)=>number

const array2:AddNumber2=(num1, num2)=>num1+num2

}