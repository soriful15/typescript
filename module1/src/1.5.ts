// Reference Type -->Object

// 1.
const user1:{
    firstName:string;
    middleName:string;
    lastName:string;
}={
    firstName:'Md',
    middleName:'soriful',
    lastName:'islam'
}


// 2.
const user2:{
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
}={
    firstName:'Md',
    lastName:'islam'
}

// 3.
const user3:{
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
}={
    firstName:'Md',
    lastName:'islam',
    isMarried: true,
}


const user4:{
    company:string;
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
}={
    company: 'programming hero',
    firstName:'Md',
    lastName:'islam',
    isMarried: true,
}
const user41:{
    // company:'programming hero'; // type --> literal types
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
}={
    // company: 'programming hero bangladesh',
    firstName:'Md',
    lastName:'islam',
    isMarried: true,
}

const user5:{
    company:'programming hero'; // type --> literal types
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
}={
    company: 'programming hero',
    firstName:'Md',
    lastName:'islam',
    isMarried: true,
}
// user5.company='ph'    // chaile o ami prohramming hero name change korte parbo na karon ami name fix kore dichi


const user6:{
  readonly company:string; // type --> literal types
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
}={
    company: 'programming hero',
    firstName:'Md',
    lastName:'islam',
    isMarried: true,
}
// user6.company='ph'  // readonly kore dile o parbo na karon aita fix kore diya hoise