{

    // 
// union types
 
type FrontEndDeveloper1='fakibazDeveloper' | 'juniorDeveloper'
const newDeveloper1:FrontEndDeveloper1='juniorDeveloper'



type FrontEndDeveloper='fakibazDeveloper' | 'juniorDeveloper'
type FullStackDeveloper='FrontEndDeveloper' | 'expertDeveloper'
type Developer= FrontEndDeveloper | FullStackDeveloper
const newDeveloper2:Developer='expertDeveloper'







type User={
    name: string;
    email: string;
    gender:'male' | 'female';
    bloodGroup: '+o'|'a+'|'ab+';

}
const user:User={
    name:'shuvo',
    email:'sorifulislam.rs10@gmail.com',
    gender:'female',
    bloodGroup:'a+'
}



// intersection type
  type FrontEndDeveloper2={
    skills:string[]
    designation1:'Frontend Developer',
  }
  type BackendDeveloper={
    skills:string[]
    designation2: 'Backend Developer',
  }
type FullStackDeveloper2= FrontEndDeveloper2 & BackendDeveloper

const fullStackDeveloper:FullStackDeveloper2={
    skills:['html','css','react','node'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}

    // 
}