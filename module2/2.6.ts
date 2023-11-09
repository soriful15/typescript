{

// constraints types

const addCourseToStudent=<T extends {id:number;name:string;email:string}>(student:T)=>{
    const course='next level web development'
    return{
        ...student,
        course
    }
}
const student3=addCourseToStudent({id:23,name:'x',email:'x@gmail',emni:'emni'})
const student1=addCourseToStudent<{
    id:number
    name: string;
    email: string;
    devType: string;
}>({id:23,name:'x',email:'x@gmail',devType:'nlwd'})


const student2=addCourseToStudent({id:22,name:'y',email:'y@gmail',devType:'apple watch'})



}