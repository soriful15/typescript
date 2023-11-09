{

    //  function with generics
    // normal function
    const createArray = (param: string): string[] => {
        return [param]
    }
    const res1 = createArray('bangladesh')

    // generics function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    type User =
        {
            id: number;
            name: string
        }

    const resGenericObj = createArrayWithGeneric<string>('bangladesh')
    // const resGenericObj2=createArrayWithGeneric<{id:number;name:string}>({id:222,name:'x'})
    const resGenericObj2 = createArrayWithGeneric<User>({ id: 222, name: 'x' })



    const createArrayWithTuple = <T,Q>(param1: T,param2:Q): [T,Q] => {
        return [param1,param2]
    }
 const res2 = createArrayWithTuple<string,number>('bangladesh',222)
    const res11= createArrayWithTuple<string,{name:string}>('bangladesh',{name:'asia'})


const addCourseToStudent=<T>(student:T)=>{
    const course='next level web development'
    return{
        ...student,
        course
    }
}
const student1=addCourseToStudent({name:'x',email:'x@gmail',devType:'nlwd'})
const student2=addCourseToStudent({name:'y',email:'y@gmail',devType:'apple watch'})




}