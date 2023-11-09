{
    // type alias
    // type rollNumber=number
type user1={
    name:string;
    age: number;
   
}
type userWith1= user1 & { roll:string;}

const user11:user1={
    name:'x',
    age:22,

}


const user12:userWith1={
    name:'x',
    age:22,
    roll:'y'
}

    // type interface
interface user2{
    name:string;
    age: number;
}
 interface userWith2 extends user2 {roll:string}

const user13:user2={
    name:'x',
    age:22,

}

const user14:userWith2={
    name:'x',
    age:22,
    roll:'y'

}


// js -->object, array--> object, function --> object 

// array
type roll =number[]
const rollNumber: roll=[3,1,2]

interface roll2{
[index: number]:number
}
const rollNumber2: roll2=[3,1,2]

// function type
type ADD=(num1:number, num2:number)=>number
const add:ADD=(num1,num2)=>num1+num2

// function interface
interface ADD2{
    (num1:number, num2:number):number
}
const add2:ADD=(num1,num2)=>num1+num2


}